package com.chatbot;

import org.alicebot.ab.Bot;
import org.alicebot.ab.Chat;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by trieudh on 24/09/2016.
 */

@Path("/")
public class BotResource {
    private ABBot abbot = new ABBot();
    private String botname = "mybot";
    private String path = "E:\\int3507-2016\\NaVi\\abchatbot-service";
    private Bot bot = new Bot(botname, path);
    private Chat chatSession = new Chat(bot);

    @Path("abbot")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response chatWithBot(@QueryParam("text") String text) {
        abbot.generateResponse(chatSession, text);
        return Response.ok().entity(abbot.toString()).build();
    }
}
