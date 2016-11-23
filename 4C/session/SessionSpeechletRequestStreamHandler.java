package session;

import java.util.HashSet;
import java.util.Set;

import com.amazon.speech.speechlet.lambda.SpeechletRequestStreamHandler;

public class SessionSpeechletRequestStreamHandler extends SpeechletRequestStreamHandler {
    private static final Set<String> supportedApplicationIds;

    static {
        supportedApplicationIds = new HashSet<String>();
        supportedApplicationIds.add("amzn1.echo-sdk-ams.app.amzn1.ask.skill.4a9c5baf-ebf2-4416-93fa-51ca2369463e");
    }

    public SessionSpeechletRequestStreamHandler() {
        super(new SessionSpeechlet(), supportedApplicationIds);
    }
}
