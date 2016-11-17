﻿using System;
using System.Threading.Tasks;
using System.Linq;
using System.Web;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System.Collections.Generic;
using Google.Apis.Customsearch.v1;
using Google.Apis.Customsearch.v1.Data;

namespace FAQ_Bot
{
    [Serializable]
    public class FaqDialog : IDialog<object>
    {
        private const string HelpMesage = "# Help message\n\nI'm Windows 10 FAQs chat bot. Before you start, you have to choose category you need help, then choose questions.\n\nIf you want to change category just type in 'change category'. And same when you want to choose talk to a person. ";
        private List<int> ansid = new List<int>();
        private string Category_Name = "";
        const string apiKey = "AIzaSyBNn5axaUkIt5gKzUJfF6bNhY4M3IFHKGI";
        const string searchEngineId = "012753298971518697678:xwpsbiujfhq";

        private List<string> hello = new List<string> {"hi","hello","alo","get started"};
        private List<string> faq = new List<string> { "faq", "change category"};
        private List<string> thanks = new List<string> { "thanks", "got it", "fixed" };

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
            List<CardAction> cardButtons = new List<CardAction>();
            //CardAction intro = new CardAction()
            //{
            //    Value = "You're a... what?",
            //    Type = "imBack",
            //    Title = "You're a... what?"
            //};
            //cardButtons.Add(intro);

            CardAction help = new CardAction()
            {
                Value = "Help",
                Type = "imBack",
                Title = "Help"
            };
            cardButtons.Add(help);

            CardAction faq = new CardAction()
            {
                Value = "FAQ",
                Type = "imBack",
                Title = "FAQ"
            };
            cardButtons.Add(faq);

            HeroCard plCard = new HeroCard()
            {
                Title = "Hi, nice to see you!",
                Text = "I'm a chat bot and I will do everything I can to help you with Windows 10!",
                Images = new List<CardImage>() {new CardImage(url: "https://compass-ssl.microsoft.com/assets/7a/af/7aaf08d2-2623-41ab-ba30-b8c48fd0aeb0.png?n=RS1_Win10_Desktop.png") },
                Buttons = cardButtons
            };
            Attachment plAttachment = plCard.ToAttachment();
            start.Attachments.Add(plAttachment);
            await context.PostAsync(start);
            context.Wait(this.MessageReceivedAsync);
        }

        public virtual async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> result)
        {
            var message = await result;
            
            if(faq.Any(message.Text.ToLower().Equals))
            {
                await context.PostAsync($"Is there anything else I can help you with?");
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                var categories = (from data in DB.categories select data).ToList();
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
                
                PromptDialog.Text(context, this.AfterChoseCategory, "Please choose a category from the list above!");
                return;
            }
            else if (hello.Any(message.Text.ToLower().Contains))
            {
                //
            }
            else if(message.Text.ToLower().Equals("talk to a person"))
            {
                await context.PostAsync($"Go [here](https://support.microsoft.com/en-us/answerdesk/accessibility) to talk to a person");
            }
            else if(thanks.Any(message.Text.ToLower().Contains))
            {
                await context.PostAsync($"Glad to talk to you!");
            }
            else if(message.Text.ToLower().Contains("help"))
            {
                await context.PostAsync(HelpMesage);
            }
            else
            {
                //Connect to the database
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                //Get answers
                var Answers = (from FAQ in DB.helps
                               where FAQ.question.Equals(message.Text)
                               select FAQ)
                               .ToList();
                if (Answers.Count > 0)
                {

                    // found 1 answer relative
                    if (Answers.Count == 1)
                    {
                        // Create a response
                        System.Text.StringBuilder sb = new System.Text.StringBuilder();
                        sb.Append(Answers[0].answer);
                        // Send the reply
                        await context.PostAsync(sb.ToString());

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
                    else if (Answers.Count > 1)
                    {
                        // Create a response
                        System.Text.StringBuilder sb = new System.Text.StringBuilder();
                        var i = 1;
                        List<string> num = new List<string>();
                        ansid.Clear();
                        sb.Append(message.Text + "\r\n");
                        // Loop through each answers
                        foreach (var ans in Answers)
                        {
                            ansid.Add(ans.id);
                            num.Add(i.ToString());
                            // Add the answer to the response
                            sb.Append(String.Format("{0}. {1}\r\n", i, ans.sub_question));
                            i++;
                        }
                        //PromptDialog.Text(context, this.ResumeAfterPrompt, sb.ToString());
                        await context.PostAsync(sb.ToString());
                        num.Add("No");
                        PromptDialog.Choice(context, this.ResumeAfterPrompt,num.ToArray(), "If you would like help with one of these questions, please choose the number, otherwise choose No.\r\n"
                            , "Sorry, I can't understand your response. If you would like help with one of these topics, please choose the number, otherwise choose No.\n\n");
                        return;
                    }
                    

                }

                else
                {
                    await context.PostAsync($"Let me have a quick look...");
                    //Search on Web
                    CustomsearchService customSearchService = new CustomsearchService(new Google.Apis.Services.BaseClientService.Initializer() { ApiKey = apiKey });
                    CseResource.ListRequest listRequest = customSearchService.Cse.List(message.Text);
                    listRequest.Cx = searchEngineId;
                    Search search = listRequest.Execute();
                    var ret = context.MakeMessage();
                    ret.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                    ret.Attachments = new List<Attachment>();
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

        private async Task ResumeAfterPrompt(IDialogContext context, IAwaitable<string> result)
        {
            try
            {
                var mess = await result;
                int choice;
                bool isNumberic = int.TryParse(mess, out choice);
                if (isNumberic)
                {

                        // Connect to the database
                        Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                        int id = ansid[choice - 1];
                        var Answer = (from FAQ in DB.helps
                                      where FAQ.id == id
                                      select FAQ)
                            .ToList();
                        System.Text.StringBuilder sb = new System.Text.StringBuilder();
                        sb.Append(Answer[0].answer);
                        await context.PostAsync(sb.ToString());

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
                            Value = Answer[0].link,
                            Type = "openUrl",
                            Title = "View on Web"
                        };
                        cardButtons.Add(web);

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
                else
                {
                        await context.PostAsync($"Sorry! You can go [here](https://support.microsoft.com/en-us/answerdesk/accessibility) to talk to a person.");

                }

            }
            catch (TooManyAttemptsException)
            {

            }
            context.Wait(this.MessageReceivedAsync);
        }



        private async Task AfterChoseCategory(IDialogContext context, IAwaitable<string> result)
        {
            var option = await result;
            bool b = category_names.Any(option.Contains);
            if(b)
            {
                Category_Name = option;
                //await context.PostAsync($"From now on, all my searches will be in {category_name}");
                var mess = context.MakeMessage();
                mess.AttachmentLayout = AttachmentLayoutTypes.Carousel;
                mess.Attachments = new List<Attachment>();
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                var Questions = (from h in DB.helps
                               join c in DB.categories on h.category_id equals c.category_id
                               where c.category_name.Equals(Category_Name)
                                 //orderby h.id ascending
                                 select h.question).Distinct()
                               .ToList();
                foreach(var q in Questions)
                {
                    var Qcard = new HeroCard
                    {
                        Title = q,
                        Buttons = new List<CardAction> { new CardAction(ActionTypes.ImBack,title: "Show me",value: q) }
                    };
                    mess.Attachments.Add(Qcard.ToAttachment());
                }
                
                await context.PostAsync(mess);
                context.Wait(this.MessageReceivedAsync);
            }
            else
            {
                PromptDialog.Text(context, this.AfterChoseCategory, "Please choose a category from the list above!");
            }
            
        }

        

    }

}