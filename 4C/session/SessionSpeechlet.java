/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
package session;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.RandomUtils;
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

/**
 * This sample shows how to create a simple speechlet for handling intent requests and managing
 * session interactions.
 */
public class SessionSpeechlet implements Speechlet {

    /**
     * Creates and returns a {@code SpeechletResponse} with a welcome message.
     *
     * @return SpeechletResponse spoken and visual welcome message
     */
    private SpeechletResponse getWelcomeResponse() {
        // Create the welcome message.
        String speechText =
                "Welcome to the Alexa Skills Kit sample. Please tell me your favorite color by "
                        + "saying, my favorite color is red";
        String repromptText =
                "Please tell me your favorite color by saying, my favorite color is red";

        return getSpeechletResponse(speechText, repromptText, true);
    }
	
	/////////////////////////////////////////
	
	private static final Logger log = LoggerFactory.getLogger(SessionSpeechlet.class);

    private static final String COLOR_KEY = "COLOR";
    private static final String COLOR_SLOT = "Color";
    
    private static final String INTENT_NAME = "IntentName";
	
	private static final int NUMBER_OF_SENTENCES = 4;
    
    private String[] allIntents = {"TodayIsVeryHotIntent","FacebookIntent",
    		"PhotographIntent","ThisSongForYouIntent"};
    
    private String[] allSentences = {"Today is very hot.",
    		"Facebook is the most popular social network in Vietnam.",
    		"We keep this love in a photograph.", "This song for you baby."};


//	private static final String allIntents = "TodayIsVeryHotIntent";
//	private static final String allSentences = "Today is very hot.";

    @Override
    public void onSessionStarted(final SessionStartedRequest request, final Session session)
            throws SpeechletException {
        log.info("onSessionStarted requestId={}, sessionId={}", request.getRequestId(),
                session.getSessionId());
        // any initialization logic goes here
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

        // Get intent from the request object.
        Intent intent = request.getIntent();
        String intentName = (intent != null) ? intent.getName() : null;

        // Note: If the session is started with an intent, no welcome message will be rendered;
        // rather, the intent specific response will be returned.
//        if ("MyColorIsIntent".equals(intentName)) {
//            return setColorInSession(intent, session);
//        } else if ("WhatsMyColorIntent".equals(intentName)) {
//            return getColorFromSession(intent, session);
//        } else {
//            throw new SpeechletException("Invalid Intent");
//        }
        
		if ("TalkToMeIntent".equals(intentName)) {
			return talkToUserASentence(session);
        } else if ("TodayIsVeryHotIntent".equals(intentName)) {
			return checkUserAnswer(session, "TodayIsVeryHotIntent");
        } else if ("FacebookIntent".equals(intentName)) {
			return checkUserAnswer(session, "FacebookIntent");
        } else if ("PhotographIntent".equals(intentName)) {
			return checkUserAnswer(session, "PhotographIntent");
        } else if ("ThisSongForYouIntent".equals(intentName)) {
			return checkUserAnswer(session, "ThisSongForYouIntent");
        } else {
			return talkToUserASentence(session);
		}
    }
    
    public SpeechletResponse talkToUserASentence(final Session session) {
		String intentInThisSession = (String) session.getAttribute(INTENT_NAME);
		String speechText, reprompt;
		if (StringUtils.isNotEmpty(intentInThisSession)){
			speechText = "Hello";
			reprompt = speechText;
			for (int i = 0; i < NUMBER_OF_SENTENCES; i++){
				if (allIntents[i].equals(intentInThisSession)){
					speechText = allSentences[i];
					reprompt = allSentences[i];
					break;
				}
			}
		} else {
			RandomUtils random = new RandomUtils();
			int index = random.nextInt(0,NUMBER_OF_SENTENCES - 1);
			session.setAttribute(INTENT_NAME, allIntents[index]);
			speechText = "Please read after me. " + allSentences[index];
			reprompt = allSentences[index];
		}
    	
    	return getSpeechletResponse(speechText, reprompt, true);
	}
    
    public SpeechletResponse checkUserAnswer(final Session session, String intentName) {
    	String speechText, repromptText;
		String intentInThisSession = (String) session.getAttribute(INTENT_NAME);
		if (StringUtils.isNotEmpty(intentInThisSession)){
			boolean isAskResponse = false;
			if (intentInThisSession.equals(intentName)){
				speechText = "Congratulations! you answered correctly. Goodbye";
				repromptText = speechText;
			} else {
				int index = 0;
				for (index = 0; index <= 3; index++){
					if(allIntents[index].equals(intentInThisSession)){
						break;
					}
				}
				speechText = "Oh you answer wrong. Please read after me. " + allSentences[index];
				repromptText = allSentences[index];
				isAskResponse = true;
			}
			return getSpeechletResponse(speechText, repromptText, isAskResponse);
		} else {
			return talkToUserASentence(session);
		}
	}

    @Override
    public void onSessionEnded(final SessionEndedRequest request, final Session session)
            throws SpeechletException {
        log.info("onSessionEnded requestId={}, sessionId={}", request.getRequestId(),
                session.getSessionId());
        // any cleanup logic goes here
	}

    /**
     * Returns a Speechlet response for a speech and reprompt text.
     */
    private SpeechletResponse getSpeechletResponse(String speechText, String repromptText,
            boolean isAskResponse) {
        // Create the Simple card content.
        SimpleCard card = new SimpleCard();
        card.setTitle("Session");
        card.setContent(speechText);

        // Create the plain text output.
        PlainTextOutputSpeech speech = new PlainTextOutputSpeech();
        speech.setText(speechText);

        if (isAskResponse) {
            // Create reprompt
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
