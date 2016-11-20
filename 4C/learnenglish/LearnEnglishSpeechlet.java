package learnenglish;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.amazon.speech.slu.Intent;
import com.amazon.speech.speechlet.IntentRequest;
import com.amazon.speech.speechlet.LaunchRequest;
import com.amazon.speech.speechlet.Session;
import com.amazon.speech.speechlet.SessionEndedRequest;
import com.amazon.speech.speechlet.SessionStartedRequest;
import com.amazon.speech.speechlet.Speechlet;
import com.amazon.speech.speechlet.SpeechletException;
import com.amazon.speech.speechlet.SpeechletResponse;
import com.amazon.speech.ui.PlainTextOutputSpeech;
import com.amazon.speech.ui.SimpleCard;

public class LearnEnglishSpeechlet implements Speechlet {	
	
    private static final Logger log = LoggerFactory.getLogger(LearnEnglishSpeechlet.class);
	
	public LearnEnglishSpeechlet() {
		// TODO Auto-generated constructor stub
	}

	 public void onSessionStarted(final SessionStartedRequest request, final Session session)
            throws SpeechletException {
        log.info("onSessionStarted requestId={}, sessionId={}", request.getRequestId(),
                session.getSessionId());
	}

	@Override
	public SpeechletResponse onIntent(IntentRequest request, Session session) throws SpeechletException {
		log.info("onIntent requestId={}, sessionId={}", request.getRequestId(), session.getSessionId());

		// lay intent tu request
		Intent intent = request.getIntent();
		String intentName = (intent != null) ? intent.getName() : null;

		if (intentName.equals("SentencesIntent")) {
			return getSentence(intent, session);
		} else {
			throw new SpeechletException("Invalid Intent");
		}
	}

	@Override
	public SpeechletResponse onLaunch(LaunchRequest request, Session session) throws SpeechletException {
		log.info("onLaunch requestId={}, sessionId={}", request.getRequestId(), session.getSessionId());
		return getWelcomeResponse();
	}

	@Override
	public void onSessionEnded(SessionEndedRequest request, Session session) throws SpeechletException {
		log.info("onSessionEnded requestId={}, sessionId={}", request.getRequestId(), session.getSessionId());

	}

	private SpeechletResponse getWelcomeResponse() {
		// tao message welcome
		String speechText = "Welcome to the Alexa Skills. Please read after me. ";
		String repromptText = "Please read after me.";

		return getSpeechResponse(speechText, repromptText);
	}

	private SpeechletResponse getSentence(final Intent intent, final Session session) {
		String speechText = "Your English Skill is Learn English";
		String repromptText = "Difficult Skill";
		return getSpeechResponse(speechText, repromptText);
	}

	private SpeechletResponse getSpeechResponse(String speechText, String repromptText) {
		// tao noi dung Simple card
		SimpleCard card = new SimpleCard();
		card.setTitle("English");
		card.setContent(speechText);

		// tao text output.
		PlainTextOutputSpeech speech = new PlainTextOutputSpeech();
		speech.setText(speechText);
		
		return SpeechletResponse.newTellResponse(speech, card);
	}

}
