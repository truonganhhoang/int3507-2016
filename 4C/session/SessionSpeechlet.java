package session;

import java.util.Map;
import java.util.Random;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.amazon.speech.slu.Intent;
import com.amazon.speech.slu.Slot;
import com.amazon.speech.speechlet.IntentRequest;
import com.amazon.speech.speechlet.LaunchRequest;
import com.amazon.speech.speechlet.Session;
import com.amazon.speech.speechlet.SessionEndedRequest;
import com.amazon.speech.speechlet.SessionStartedRequest;
import com.amazon.speech.speechlet.Speechlet;
import com.amazon.speech.speechlet.SpeechletException;
import com.amazon.speech.speechlet.SpeechletResponse;
import com.amazon.speech.ui.PlainTextOutputSpeech;
import com.amazon.speech.ui.Reprompt;
import com.amazon.speech.ui.SimpleCard;


public class SessionSpeechlet implements Speechlet {
    private static final Logger log = LoggerFactory.getLogger(SessionSpeechlet.class);

    private static final String COLOR_KEY = "COLOR";
    private static final String COLOR_SLOT = "Color";

    @Override
    public void onSessionStarted(final SessionStartedRequest request, final Session session)
            throws SpeechletException {
        log.info("onSessionStarted requestId={}, sessionId={}", request.getRequestId(),
                session.getSessionId());
    }

    @Override
    public SpeechletResponse onLaunch(final LaunchRequest request, final Session session)
            throws SpeechletException {
        log.info("onLaunch requestId={}, sessionId={}", request.getRequestId(),
                session.getSessionId());
        return getWelcomeResponse();
    }

    @Override
    public SpeechletResponse onIntent(final IntentRequest request, final Session session)
            throws SpeechletException {
        log.info("onIntent requestId={}, sessionId={}", request.getRequestId(),
                session.getSessionId());

        Intent intent = request.getIntent();
        String intentName = (intent != null) ? intent.getName() : null;

        if ("MyColorIsIntent".equals(intentName)) {
            return setColorInSession(intent, session);
        } else if ("WhatsMyColorIntent".equals(intentName)) {
            return getColorFromSession(intent, session);
        } else {
            throw new SpeechletException("Invalid Intent");
        }
    }

    @Override
    public void onSessionEnded(final SessionEndedRequest request, final Session session)
            throws SpeechletException {
        log.info("onSessionEnded requestId={}, sessionId={}", request.getRequestId(),
                session.getSessionId());
    }

	// tao welcome message
    private SpeechletResponse getWelcomeResponse() {
        String speechText =
                "Welcome to the Alexa Skills Kit sample. Please tell me your favorite color by "
                        + "saying, my favorite color is red";
        String repromptText =
                "Please tell me your favorite color by saying, my favorite color is red";

        return getSpeechletResponse(speechText, repromptText, true);
    }

    
    private SpeechletResponse setColorInSession(final Intent intent, final Session session) {
        
        Map<String, Slot> slots = intent.getSlots();

        Slot favoriteColorSlot = slots.get(COLOR_SLOT);
        String speechText, repromptText;
        
        if (favoriteColorSlot != null) {
            String favoriteColor = favoriteColorSlot.getValue();
            session.setAttribute(COLOR_KEY, favoriteColor);
            speechText =
                    String.format("I now know that your favorite color is %s. You can ask me your "
                            + "favorite color by saying, what's my favorite color?", favoriteColor);
            repromptText =
                    "You can ask me your favorite color by saying, what's my favorite color?";

        } else {
            speechText = "I'm not sure what your favorite color is, please try again";
            repromptText =
                    "I'm not sure what your favorite color is.";
        }

        return getSpeechletResponse(speechText, repromptText, true);
    }

   
    private SpeechletResponse getColorFromSession(final Intent intent, final Session session) {
        String speechText;
        boolean isAskResponse = false;

        String favoriteColor = (String) session.getAttribute(COLOR_KEY);

        if (StringUtils.isNotEmpty(favoriteColor)) {
            speechText = String.format("Your favorite color is %s. Goodbye.", favoriteColor);
        } else {
            speechText =
                    "I'm not sure what your favorite color is. You can say, my favorite color is "
                            + "red";
            isAskResponse = true;
        }

        return getSpeechletResponse(speechText, speechText, isAskResponse);
    }

   
    private SpeechletResponse getSpeechletResponse(String speechText, String repromptText,
            boolean isAskResponse) {
        SimpleCard card = new SimpleCard();
        card.setTitle("Session");
        card.setContent(speechText);

        PlainTextOutputSpeech speech = new PlainTextOutputSpeech();
        speech.setText(speechText);

        if (isAskResponse) {
            PlainTextOutputSpeech repromptSpeech = new PlainTextOutputSpeech();
            repromptSpeech.setText(repromptText);
            Reprompt reprompt = new Reprompt();
            reprompt.setOutputSpeech(repromptSpeech);

            return SpeechletResponse.newAskResponse(speech, reprompt, card);

        } else {
            return SpeechletResponse.newTellResponse(speech, card);
        }
    }
}
