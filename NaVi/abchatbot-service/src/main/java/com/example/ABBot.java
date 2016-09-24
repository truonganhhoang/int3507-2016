package com.example;

/**
 * Created by trieudh on 24/09/2016.
 */

import org.alicebot.ab.*;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ABBot {

    @XmlElement(name = "response")
    private String response;

    ABBot() {
        MagicStrings.root_path = "/";
        MagicStrings.default_bot_response = "Tôi chưa hiểu ý bạn";
    }

    public void generateResponse(String inputText) {
        String botname = "mybot";
        String path = "/home/trieudh/Desktop/int3507-2016/NaVi/abchatbot-service";
        Bot bot = new Bot(botname, path);
        Chat chatSession = new Chat(bot);
        this.response = chatSession.multisentenceRespond(inputText);
    }

    @Override
    public String toString() {
        try {
            return new JSONObject().put("botResponse", this.response).toString();
        }
        catch (JSONException e) {
            return null;
        }
    }
}
