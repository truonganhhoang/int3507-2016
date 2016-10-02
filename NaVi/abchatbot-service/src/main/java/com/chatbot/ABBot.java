package com.chatbot;

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
        MagicStrings.default_bot_response = "ABBOT_CONFUSION";
        MagicStrings.error_bot_response = "ABBOT_ERROR";
    }

    public void generateResponse(Chat chatSession, String inputText) {
        this.response = chatSession.multisentenceRespond(inputText);
    }

    @Override
    public String toString() {
        try {
            return new JSONObject().put("intentClass", "CO").put("botResponse", this.response).toString();
        }
        catch (JSONException e) {
            return null;
        }
    }
}
