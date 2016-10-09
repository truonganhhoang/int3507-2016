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
        private List<int> ansid = new List<int>();
        private string WinVer = "";

        public List<string> WinVerOptions = new List<string>() { "Windows 10", "Windows 10 Mobile", "Windows 8.1", "Windows 7" };


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
                PromptDialog.Choice(context, this.ChoseWinver, WinVerOptions.ToArray(), "Before get started, please tell me your windows version?", "I didn't understand. Please try again.");
                return;
            }
            else if(message.Text.ToLower().StartsWith("change"))
            {
                PromptDialog.Choice(context, this.ChoseWinver, WinVerOptions.ToArray(), "Please tell me your windows version?", "I didn't understand. Please try again.");
                return;
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
                PromptDialog.Confirm(context, this.StartOver, "Start over? This will clear the history and restart the chat.", "Didn't get that!");
                return;
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
                               && FAQ.winver.Equals(WinVer)
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
                        //sb.Append(String.Format("**{0}**\n\n{1}\n\n", Answers[0].question1, Answers[0].answer));
                        // Send the reply
                        await context.PostAsync(sb.ToString());
                    }
                    else if (Answers.Count > 1)
                    {
                        // Create a response
                        System.Text.StringBuilder sb = new System.Text.StringBuilder();
                        var i = 0;
                        ansid.Clear();
                        sb.Append("If you would like help with one of these topics, please type the number, otherwise answer no.\n\n");
                        // Loop through each answers
                        foreach (var ans in Answers)
                        {
                            ansid.Add(ans.id);
                            // Add the answer to the response
                            sb.Append(String.Format("{0}. {1}\n\n", ++i, ans.question2));
                        }
                        PromptDialog.Text(context, this.ResumeAfterPrompt, sb.ToString());
                        return;
                    }
                    

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
                    HeroCard plCard = new HeroCard()
                    {
                        Title = "Hope that help!",
                        Text = "If not, please feel free to rephrase your question or click below to talk to a person.",
                        //Images = cardImages,
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

        private async Task ResumeAfterPrompt(IDialogContext context, IAwaitable<string> result)
        {
            try
            {
                var mess = await result;
                int choice;
                bool isNumberic = int.TryParse(mess, out choice);
                if(isNumberic)
                {
                    
                    if (choice > ansid.Count)
                    {
                        PromptDialog.Text(context, this.ResumeAfterPrompt, "Sorry, I can't understand your response. If you would like help with one of these topics, please type the number, otherwise answer no.\n\n");
                        return;
                    }
                    else
                    {
                        // Connect to the database
                        Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                        int id = ansid[choice - 1];
                        var Answer = (from FAQ in DB.windows where FAQ.id == id
                                      && FAQ.winver.Equals(WinVer)
                                      select FAQ)
                            .ToList();
                        System.Text.StringBuilder sb = new System.Text.StringBuilder();
                        sb.Append(String.Format("**{0}**\n\n{1}\n\n", Answer[0].question2, Answer[0].answer));
                        await context.PostAsync(sb.ToString());

                    }
                }
                else
                {
                    if (mess.ToLower().Equals("no"))
                    {
                        await context.PostAsync($"Sorry! You can go [here](https://support.microsoft.com/en-us/answerdesk/accessibility) to talk to a person.");
                    }
                    else
                    {
                        PromptDialog.Text(context, this.ResumeAfterPrompt, "Sorry, I can't understand your response. If you would like help with one of these topics, please type the number, otherwise answer no.\n\n");
                        return;
                    }

                }
                
            }
            catch (TooManyAttemptsException)
            {

            }
            context.Wait(this.MessageReceivedAsync);
        }

        private async Task StartOver(IDialogContext context, IAwaitable<bool> result)
        {
            var confirm = await result;
            if(confirm)
            {
                await context.PostAsync($"Okay, let's start over. Describe your problem and I'll look for the best solution.");
                context.Wait(this.MessageReceivedAsync);
            }
            else
            {
                context.Wait(this.MessageReceivedAsync);
            }
        }

        private async Task ChoseWinver(IDialogContext context, IAwaitable<string> result)
        {
            var option = await result;
            WinVer = option;
            //context.ConversationData.SetValue(ContextConstants.WinVer, option);
            //context.UserData.SetValue(ContextConstants.WinVer, option);
            await context.PostAsync($"From now on, all my searches will be in {WinVer}");

            context.Wait(this.MessageReceivedAsync);

        }

    }

}