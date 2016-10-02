package com.maxent;

import jmdn.base.util.string.StrUtil;
import jmdn.method.classification.maxent.Classification;

import java.util.ArrayList;
import java.util.List;

public class DomainClassifier {
	private Classification classifier = null;
	
	public DomainClassifier(String modelDirectory) {
		this.classifier = new Classification(modelDirectory);
	}
	
	public void init() {
		if (!this.classifier.isInitialized()) {
			this.classifier.init();
		}
	}

	public String doClassification(String sentence) {
		List<String> cps = FeatureGenerator.scanFeatures(sentence);
		return classifier.classify(StrUtil.join(cps));
	}
	
	public List<String> doClassification(List<String> lines) {
		List<String> featuredPosts = new ArrayList<String>();
		
		for (int i = 0; i < lines.size(); i++) {
			List<String> cps = FeatureGenerator.scanFeatures(lines.get(i));
			featuredPosts.add(StrUtil.join(cps));
		}
		
		return classifier.classify(featuredPosts);
	}
}
