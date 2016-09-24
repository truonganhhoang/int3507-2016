package com.example;

import org.alicebot.ab.AB;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by trieudh on 24/09/2016.
 */

@Path("abbot")
public class BotResource {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response chatWithBot(@QueryParam("text") String text) {
        ABBot bot = new ABBot();
        bot.generateResponse(text);

        return Response.status(Response.Status.FOUND).entity(bot.toString()).build();
    }
}
