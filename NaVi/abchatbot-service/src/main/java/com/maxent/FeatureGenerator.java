package com.maxent;

import jmdn.base.util.string.StrUtil;

import java.util.ArrayList;
import java.util.List;

public class FeatureGenerator {
	
	public static List<String> scanFeatures(String sentence) {
		List<String> contextPredicates = new ArrayList<String>();
		
		/* extracting context predicates from the content */
		List<String> tokens = StrUtil.tokenizeString(sentence.toLowerCase());

		for (int k = 0; k < tokens.size(); k++) {
			/* 1-gram context predicates */
			String cp = tokens.get(k);
			contextPredicates.add(cp.replace(" ", ":"));

			/* 2-gram context predicates */
			if (k < tokens.size() - 1) {
				cp = tokens.get(k) + " " + tokens.get(k + 1);
				contextPredicates.add(cp.replace(" ", ":"));
			}
			
			/* 3-gram context predicates */
			if (k < tokens.size() - 2) {
				cp = tokens.get(k) + " " + tokens.get(k + 1) + " " + tokens.get(k + 2);
				contextPredicates.add(cp.replace(" ", ":"));
			}
			
			/* 4-gram context predicates */
			if (k < tokens.size() - 3) {
				cp = tokens.get(k) + " " + tokens.get(k + 1) + " " + tokens.get(k + 2) + " " + tokens.get(k + 3);
				contextPredicates.add(cp.replace(" ", ":"));
			}

		}
		return contextPredicates;
	}
}
