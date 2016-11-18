package learnenglish;

import java.util.HashSet;
import java.util.Set;

import com.amazon.speech.speechlet.lambda.SpeechletRequestStreamHandler;

public class LearnEnglishSpeechletRequestStreamHandler extends SpeechletRequestStreamHandler {
	private static final Set<String> supportedApplicationIds;

	static {
		/*
		 * This Id can be found on https://developer.amazon.com/edw/home.html#/
		 * "Edit" the relevant Alexa Skill and put the relevant Application Ids
		 * in this Set.
		 */
		supportedApplicationIds = new HashSet<String>();
		supportedApplicationIds.add("amzn1.echo-sdk-ams.app.[amzn1.ask.skill.9b12e30e-d61e-454c-b20f-b25634e51590]");
	}

	public LearnEnglishSpeechletRequestStreamHandler() {
		super(new LearnEnglishSpeechlet(), supportedApplicationIds);
	}
}