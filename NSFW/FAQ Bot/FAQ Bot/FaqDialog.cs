using System;
using System.Threading.Tasks;
using System.Linq;
using System.Web;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System.Collections.Generic;

namespace FAQ_Bot
{
    [Serializable]
    public class FaqDialog : IDialog<object>
    {
        private const string HelpMesage = "";
        //private List<int> ansid = new List<int>();


        public async Task StartAsync(IDialogContext context)
        {
            await context.PostAsync($"Hello! I'm FAQ Bot.");
            context.Wait(this.MessageReceivedAsync);
        }

        public virtual async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> result)
        {
            var message = await result;
            if(message.Text.ToLower().StartsWith("hi") || message.Text.ToLower().StartsWith("hello"))
            {
                await context.PostAsync($"Describe your problem and I'll look for the best solution. You can also ask to talk to a person at any time.");
            }
            else if(message.Text.ToLower().Contains("person"))
            {
                await context.PostAsync($"Go [here](https://support.microsoft.com/en-us/answerdesk/accessibility) to talk to a person");
            }
            else if(message.Text.ToLower().Contains("thanks") || message.Text.ToLower().Contains("fixed"))
            {
                await context.PostAsync($"Glad to talk to you!");
            }
            else if (message.Text.ToLower().Contains("start over"))
            {
                await context.PostAsync($"Okay, let's start over. Describe your problem and I'll look for the best solution.");
            }
            else if(message.Text.ToLower().Contains("help"))
            {
                await context.PostAsync($"Help");
            }
            else
            {
                // Connect to the database
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                // Get answers
                var Answers = (from FAQ in DB.windows
                               where FAQ.question1.ToLower().Contains(message.Text)
                               select FAQ)
                               .ToList();
                if (Answers.Count > 0)
                {

                    //// found 1 answer relative
                    //if (Answers.Count == 1)
                    //{
                    //    // Create a response
                    //    System.Text.StringBuilder sb = new System.Text.StringBuilder();
                    //    sb.Append(String.Format("**{0}**\n\n{1}\n\n", Answers[0].question1, Answers[0].answer));
                    //    // Send the reply
                    //    await context.PostAsync(sb.ToString());
                    //}
                    //else if (Answers.Count > 1)
                    //{
                    //    // Create a response
                    //    System.Text.StringBuilder sb = new System.Text.StringBuilder();
                    //    var i = 0;
                    //    sb.Append("If you would like help with one of these topics, please type the number, otherwise answer no.\n\n");
                    //    // Loop through each answers
                    //    foreach (var ans in Answers)
                    //    {
                    //        ansid.Add(ans.id);
                    //        // Add the answer to the response
                    //        sb.Append(String.Format("{0}. {1}\n\n", ++i, ans.question2));
                    //    }
                    //    PromptDialog.Text(context, this.ResumeAfterPrompt, sb.ToString());

                    //}

                    System.Text.StringBuilder sb = new System.Text.StringBuilder();
                foreach (var ans in Answers)
                {

                    // Add the answer to the response
                    sb.Append(String.Format("**{0}**\n\n{1}\n\n", ans.question1, ans.answer));
                }

                    await context.PostAsync(sb.ToString());
                    // Add Talk to a person button
                    var reply = context.MakeMessage();
                    reply.Attachments = new List<Attachment>();
                    List<CardImage> cardImages = new List<CardImage>();
                    cardImages.Add(new CardImage(url: "http://www.elemica.com/wp-content/uploads/2015/02/support-smiley.png"));
                    List<CardAction> cardButtons = new List<CardAction>();
                    CardAction plButton = new CardAction()
                    {
                        Value = "https://support.microsoft.com/en-us/answerdesk/accessibility",
                        Type = "openUrl",
                        Title = "Talk to a person"
                    };
                    cardButtons.Add(plButton);
                    ThumbnailCard plCard = new ThumbnailCard()
                    {
                        Title = "Hope that help!",
                        Text = "If not, please feel free to rephrase your question or click below to talk to a person.",
                        Images = cardImages,
                        Buttons = cardButtons
                    };
                    Attachment plAttachment = plCard.ToAttachment();
                    reply.Attachments.Add(plAttachment);
                    await context.PostAsync(reply);
                    
                }
                
                else
                {
                    await context.PostAsync($"Sorry I did not understand: " + message.Text);
                }
                
            }

            context.Wait(this.MessageReceivedAsync);
        
           }

        //private async Task ResumeAfterPrompt(IDialogContext context, IAwaitable<string> result)
        //{
        //    //try
        //    //{
        //    // Connect to the database
        //    Models.BotDataEntities1 DB = new Models.BotDataEntities1();
        //    var mess = await result;
        //    if (Int32.Parse(mess) > ansid.Count)
        //    {
        //        await context.PostAsync($"Sorry, I can't understand your response. If you would like help with one of these topics, please type the number, otherwise answer no.\n\n");
        //    }
        //    else if (mess.ToLower().Equals("no"))
        //    {
        //        await context.PostAsync($"Sorry! You can go [here](https://support.microsoft.com/en-us/answerdesk/accessibility) to talk to a person.");
        //    }
        //    else
        //    {
        //        var Answer = (from FAQ in DB.windows where FAQ.id == ansid[Int32.Parse(mess)] select FAQ)
        //            .ToList();
        //        System.Text.StringBuilder sb = new System.Text.StringBuilder();
        //        sb.Append(String.Format("**{0}**\n\n{1}\n\n", Answer[0].question2, Answer[0].answer));
        //        await context.PostAsync(sb.ToString());
        //    }

        //    //}
        //    //catch (TooManyAttemptsException)
        //    //{

        //    //}
        //    context.Wait(this.MessageReceivedAsync);
        //}





    }

}