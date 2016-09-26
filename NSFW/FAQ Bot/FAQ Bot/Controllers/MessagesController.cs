using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.Bot.Connector;
using Newtonsoft.Json;

namespace FAQ_Bot
{
    [BotAuthentication]
    public class MessagesController : ApiController
    {
        /// <summary>
        /// POST: api/Messages
        /// Receive a message from a user and reply to it
        /// </summary>
        public async Task<HttpResponseMessage> Post([FromBody]Activity activity)
        {
            if (activity.Type == ActivityTypes.Message)
            {
                // Connect to the database
                Models.BotDataEntities1 DB = new Models.BotDataEntities1();
                // Get answers
                var Answers = (from FAQ in DB.FAQs
                               where FAQ.Name.ToLower().Contains(activity.Text) select FAQ)
                               .ToList();
                // Create a response
                System.Text.StringBuilder sb = new System.Text.StringBuilder();
                sb.Append("I found these answers:\n\n");
                // Loop through each answers
                foreach (var ans in Answers)
                {
                    // Add the answer to the response
                    sb.Append(String.Format("# {0}\n\n# Cause\n\n {1}\n\n#Resolution\n\n {2}\n\n", ans.Name, ans.Cause, ans.Resolution));
                }

                // Create a reply message
                Activity replyToConversation = activity.CreateReply();
                replyToConversation.Recipient = activity.From;
                replyToConversation.Type = "message";
                // Set the text containg the Answers as the response
                replyToConversation.Text = sb.ToString();
                // Create a ConnectorClient and use it to send the reply message
                var connector =
                    new ConnectorClient(new Uri(activity.ServiceUrl));
                // Send the reply
                await connector.Conversations.SendToConversationAsync(replyToConversation);
            }
            else
            {
                HandleSystemMessage(activity);
            }
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        private Activity HandleSystemMessage(Activity message)
        {
            if (message.Type == ActivityTypes.DeleteUserData)
            {
                // Implement user deletion here
                // If we handle user deletion, return a real message
            }
            else if (message.Type == ActivityTypes.ConversationUpdate)
            {
                // Handle conversation state changes, like members being added and removed
                // Use Activity.MembersAdded and Activity.MembersRemoved and Activity.Action for info
                // Not available in all channels
            }
            else if (message.Type == ActivityTypes.ContactRelationUpdate)
            {
                // Handle add/remove from contact lists
                // Activity.From + Activity.Action represent what happened
            }
            else if (message.Type == ActivityTypes.Typing)
            {
                // Handle knowing tha the user is typing
            }
            else if (message.Type == ActivityTypes.Ping)
            {
            }

            return null;
        }
    }
}