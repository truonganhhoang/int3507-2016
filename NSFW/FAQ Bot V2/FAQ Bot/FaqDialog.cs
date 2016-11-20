using Google.Apis.Customsearch.v1;
using Google.Apis.Customsearch.v1.Data;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FAQ_Bot
{
    [Serializable]
    public class FaqDialog : IDialog<object>
    {
        private const string HelpMesage = "# Help message\n\nI'm Windows 10 FAQs chat bot. "
            + "Before you start, you have to choose category you need help, then choose questions. "
            + "I will show you answer, you can choose to view the question on web. "
            + "If you don't find the question you need, just type in your question, I will find some answers relative."
            + "\n\n You can type 'help' whenever you need help, this help message will display."
            + " If you want to change category, just type in category name or choose from category list (type 'faq' to show category list again). "
            + "You can also ask to talk to a person at any time."
            + "\n\n# Note\n\nI **can not** handle image message or file, so please **do not** send image or file in conversation";

        // google api key
        private const string apiKey = "AIzaSyBNn5axaUkIt5gKzUJfF6bNhY4M3IFHKGI";

        // google searchEngineId
        private const string searchEngineId = "012753298971518697678:xwpsbiujfhq";

        // annotation
        private List<string> hello = new List<string> { "hi", "hello", "alo", "what's your name", "who are you" };

        private List<string> thanks = new List<string> { "thanks", "got it", "fixed", "Got it, thanks!" };

        private List<string> category_names = new List<string>
        {
            "Install, upgrade, & activate",
            "Get started",
            "Microsoft account",
            "Store",
            "Apps on Windows 10",
            "Connectivity",
            "Microsoft Edge",
            "Cortana & search",
            "Gaming & Xbox",
            "Devices & drivers",
            "Repair & recovery",
            "Syncing & saving",
            "Security & privacy",
            "Email & communication",
            "Ease of Access",
        };

        public async Task StartAsync(IDialogContext context)
        {
            var start = context.MakeMessage();
            start.Attachments = new List<Attachment>();
            // declare button list
            List<CardAction> cardButtons = new List<CardAction>();
            CardAction help = new CardAction()
            {
                Value = "Help",
                Type = "imBack",
                Title = "Help"
            };
            cardButtons.Add(help); // add button to list

            CardAction faq = new CardAction()
            {
                Value = "FAQ",
                Type = "imBack",
                Title = "FAQ"
            };
            cardButtons.Add(faq);
            // declare a HeroCard
            HeroCard plCard = new HeroCard()
            {
                Title = "Hi, nice to see you!",
                Text = "I'm a chat bot and I will do everything I can to help you with Windows 10!",
                Images = new List<CardImage>() { new CardImage(url: "https://compass-ssl.microsoft.com/assets/7a/af/7aaf08d2-2623-41ab-ba30-b8c48fd0aeb0.png?n=RS1_Win10_Desktop.png") },
                Buttons = cardButtons
            };
            // add HeroCard to Attachments list
            start.Attachments.Add(plCard.ToAttachment());
            await context.PostAsync(start); //send attachments to user
            context.Wait(this.MessageReceivedAsync);
        }

        public virtual async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> result)
        {
            var message = await result;

            if (message.Text.ToLower().Equals("faq"))
            {
                await context.PostAsync($"Is there anything else I can help you with?");
                //Connect to the database
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                var categories = (from data in DB.categories select data).ToList(); // sql query (linq)
                var length = categories.Count();
                var limit = Math.Ceiling((double)categories.Count() / 8);
                for (var k = 0; k < limit; k++)
                {
                    var chosen = context.MakeMessage();
                    chosen.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                    chosen.Attachments = new List<Attachment>();
                    var max = length > 8 ? 8 : length;
                    for (var m = 0; m < max; m++)
                    {
                        var index = 8 * k + m;
                        var card = new HeroCard
                        {
                            Title = categories[index].category_name,
                            Images = new List<CardImage>() { new CardImage(url: categories[index].category_image) },
                            Buttons = new List<CardAction>() { new CardAction(ActionTypes.ImBack, "Choose this category", value: categories[index].category_name) }
                        };
                        chosen.Attachments.Add(card.ToAttachment());
                    }
                    await context.PostAsync(chosen);
                    length -= 8;
                }
            }
            else if (category_names.Any(message.Text.Equals))
            {
                var mess = context.MakeMessage();
                mess.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                mess.Attachments = new List<Attachment>();
                //Connect to the database
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                var Questions = (from h in DB.helps
                                 join c in DB.categories on h.category_id equals c.category_id
                                 where c.category_name.Equals(message.Text)
                                 select h.question).Distinct()
                               .ToList();
                // Loop through each questions
                foreach (var q in Questions)
                {
                    var Qcard = new HeroCard
                    {
                        Title = q,
                        Buttons = new List<CardAction> { new CardAction(ActionTypes.ImBack, title: "Show me", value: q) }
                    };
                    mess.Attachments.Add(Qcard.ToAttachment());
                }

                await context.PostAsync(mess);
            }
            else if (hello.Any(message.Text.ToLower().Equals))
            {
                await context.PostAsync($"Describe your problem and I'll look for the best solution.");
            }
            else if (message.Text.ToLower().Equals("talk to a person"))
            {
                await context.PostAsync($"Go [here](https://support.microsoft.com/en-us/answerdesk/accessibility) to talk to a person");
            }
            else if (thanks.Any(message.Text.ToLower().Contains))
            {
                await context.PostAsync($"Glad to talk to you!");
            }
            else if (message.Text.ToLower().Contains("help"))
            {
                await context.PostAsync(HelpMesage);
            }
            else
            {
                //Connect to the database
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                //Get answers
                var Answers = (from FAQ in DB.helps
                               where FAQ.question.Equals(message.Text) || FAQ.sub_question.Equals(message.Text)
                               select FAQ)
                               .ToList();
                if (Answers.Count > 0)
                {
                    // found 1 answer relative = sub_question is null
                    if (Answers.Count == 1)
                    {
                        await context.PostAsync(Answers[0].answer);

                        var reply = context.MakeMessage();
                        reply.Attachments = new List<Attachment>();
                        List<CardAction> cardButtons = new List<CardAction>();
                        CardAction person = new CardAction()
                        {
                            Value = "https://support.microsoft.com/en-us/answerdesk/accessibility",
                            Type = "openUrl",
                            Title = "Talk to a person"
                        };
                        cardButtons.Add(person);

                        CardAction web = new CardAction()
                        {
                            Value = Answers[0].link,
                            Type = "openUrl",
                            Title = "View on Web"
                        };
                        cardButtons.Add(web);

                        CardAction thanks = new CardAction()
                        {
                            Value = "Got it, thanks!",
                            Type = "imBack",
                            Title = "Got it, thanks!"
                        };
                        cardButtons.Add(thanks);

                        HeroCard plCard = new HeroCard()
                        {
                            Title = "Hope that help!",
                            Text = "You can choose 'Talk to a person' or 'View the answer on Web' by click buttons below",
                            Buttons = cardButtons
                        };
                        Attachment plAttachment = plCard.ToAttachment();
                        reply.Attachments.Add(plAttachment);
                        await context.PostAsync(reply);
                    }
                    else if (Answers.Count > 1) // sub_question is not null
                    {
                        var rep = context.MakeMessage();
                        rep.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                        rep.Attachments = new List<Attachment>();
                        // show sub_question list
                        foreach (var ans in Answers)
                        {
                            var card = new HeroCard
                            {
                                Title = ans.sub_question,
                                Buttons = new List<CardAction> { new CardAction(ActionTypes.ImBack, "Show me", value: ans.sub_question) }
                            };
                            rep.Attachments.Add(card.ToAttachment());
                        }
                        await context.PostAsync(rep);
                    }
                }
                else
                {
                    await context.PostAsync($"Let me have a quick look...");
                    //Search on Web using google cse api
                    CustomsearchService customSearchService = new CustomsearchService(new Google.Apis.Services.BaseClientService.Initializer() { ApiKey = apiKey });
                    CseResource.ListRequest listRequest = customSearchService.Cse.List(message.Text);
                    listRequest.Cx = searchEngineId;
                    Search search = listRequest.Execute();
                    var ret = context.MakeMessage();
                    ret.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                    ret.Attachments = new List<Attachment>();
                    // loop through each google results
                    foreach (var item in search.Items)
                    {
                        var card = new HeroCard
                        {
                            Title = item.Title,
                            Subtitle = item.DisplayLink,
                            Text = item.Snippet,
                            Buttons = new List<CardAction>() { new CardAction(ActionTypes.OpenUrl, "View on Web", value: item.Link) }
                        };
                        ret.Attachments.Add(card.ToAttachment());
                    }
                    await context.PostAsync(ret);
                }
            }

            context.Wait(this.MessageReceivedAsync);
        }
    }
}