package com.maxent;

import com.dictionary_regex.Dictionaries;
import com.dictionary_regex.Regexes;
import jmdn.base.util.string.StrUtil;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Duong Quang Vu K57CLC,UET,VNU
 * @version 1.0
 * @since 15-11-2015
 */
public class FeatureGenerator {
	
	public static List<String> scanFeatures(String sentence) {
		List<String> contextPredicates = new ArrayList<String>();
		
		/* extracting context predicates from the content */
		List<String> tokens = StrUtil.tokenizeString(sentence.toLowerCase());

		for (int k = 0; k < tokens.size(); k++) {
			/* 1-gram context predicates */
			String cp = tokens.get(k);
//			matchDictionary(contextPredicates, cp);
//			matchRegex(contextPredicates, cp);
			contextPredicates.add(cp.replace(" ", ":"));

			/* 2-gram context predicates */
			if (k < tokens.size() - 1) {
				cp = tokens.get(k) + " " + tokens.get(k + 1);
//				matchDictionary(contextPredicates, cp);
//				matchRegex(contextPredicates, cp);
				contextPredicates.add(cp.replace(" ", ":"));
			}
			
			/* 3-gram context predicates */
			if (k < tokens.size() - 2) {
				cp = tokens.get(k) + " " + tokens.get(k + 1) + " " + tokens.get(k + 2);
//				matchDictionary(contextPredicates, cp);
//				matchRegex(contextPredicates, cp);
				contextPredicates.add(cp.replace(" ", ":"));
			}
			
			/* 4-gram context predicates */
			if (k < tokens.size() - 3) {
				cp = tokens.get(k) + " " + tokens.get(k + 1) + " " + tokens.get(k + 2) + " " + tokens.get(k + 3);
//				matchDictionary(contextPredicates, cp);
//				matchRegex(contextPredicates, cp);
				contextPredicates.add(cp.replace(" ", ":"));
			}

		}

/*		String cp = tokens.get(tokens.size()-1);
		if ( cp.endsWith("không") || cp.endsWith("chưa") ||cp.endsWith("gì") 
				||cp.endsWith("à") ||cp.endsWith("hả") ){
			contextPredicates.add("cau-hoi");
		}*/
		return contextPredicates;
	}

	public static void matchDictionary(List<String> contextPredicates, String cp){
		boolean bool = false;
		int time = 1;
		for (String key : Dictionaries.AC) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("sentence", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.AR) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("sentence", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.Bye) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("other", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.Emotion) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("emotion", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.O_dialog) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("other", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.Question) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("question", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.RequestAct) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("requestact", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.Sugguest) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("sugguest", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		for (String key : Dictionaries.Thank) {
			if (cp.equals(key.toLowerCase())) {
				contextPredicates.add(duplicate("other", time).replace(" ", ":"));
				bool = true;
				break;
			}
		}
		if (bool == false)
			contextPredicates.add(cp.replace(" ", ":"));
	}
	
	public static void matchRegex(List<String> contextPredicates, String cp){
		boolean bool = false;
		int num_duplicate = 1;
		if ( cp.matches(Regexes.date_1w) ){
			contextPredicates.add(duplicate("date_1w", num_duplicate).replace(" ", ":"));
			bool = true;
		}
		if ( cp.matches(Regexes.time_1w) ){
			contextPredicates.add(duplicate("time_1w", num_duplicate).replace(" ", ":"));
			bool = true;
		}
		if (bool == false)
			contextPredicates.add(cp.replace(" ", ":"));
	}
	
	public static String duplicate(String contextPredicate, int num){
		String newcp = contextPredicate;
		for (int i = 0; i < num-1; i++){
			newcp += " " + contextPredicate;
		}
		return newcp;
	}
	
	public static List<String> scanFeaturesForTraining(String line) {
		String label = line.split(",")[1];
		if (label.equals("CQ") || label.equals("QK"))
			label = "Q";
		List<String> contextPredicatesLabel = scanFeatures(line.split(",")[0].toLowerCase());
		contextPredicatesLabel.add(label);
		return contextPredicatesLabel;
	}
}
