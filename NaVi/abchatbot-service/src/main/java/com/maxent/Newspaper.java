package com.maxent;

public class Newspaper {
	
	public String title = "";
	public String topic = "";
	public String content = "";
	public String type = "";
	
	public Newspaper(String topic, String title, String content, String type){
		this.topic = topic;
		this.title = title;
		this.content = content;
		this.type = type;
	}
	
	public String getTitle() {
		return title;
	}
	
	public String getTopic() {
		return topic;
	}

	public String getContent() {
		return content;
	}

	public String getType() {
		return type;
	}

}
