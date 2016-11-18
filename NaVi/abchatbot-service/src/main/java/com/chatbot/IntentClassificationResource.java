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
public class IntentClassificationResource {
    private ABBot abbot = new ABBot();
    private String botname = "mybot";
    private String path = System.getProperty("user.dir");
    private Bot bot = new Bot(botname, path);
    private Chat chatSession = new Chat(bot);
    private Classifier classifier = new Classifier();

    @Path("classify")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response intentClassify(@QueryParam("text") String text) {
        String classLabel = classifier.classify(text);
//        System.out.println(classifier.classify("tu vung"));
//        System.out.print(text + ": " + classLabel);
        if (classLabel.equals("CO")) {
            abbot.generateResponse(chatSession, text);
            return Response.ok().entity(abbot.toString()).build();
        }
        return Response.ok().entity(classifier.toString()).build();
    }
}
