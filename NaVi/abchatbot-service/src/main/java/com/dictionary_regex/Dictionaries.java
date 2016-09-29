package com.dictionary_regex;

import com.maxent.FileLoader;

import java.util.List;

public class Dictionaries {
	public static List<String> AC = FileLoader.execute("dictionaries/AC.dic");
	public static List<String> AR = FileLoader.execute("dictionaries/AR.dic");
	public static List<String> Bye = FileLoader.execute("dictionaries/Bye.dic");
	public static List<String> Emotion = FileLoader.execute("dictionaries/Emotion.dic");
	public static List<String> O_dialog = FileLoader.execute("dictionaries/o-dialog.dic");
	public static List<String> Question = FileLoader.execute("dictionaries/Question.dic");
	public static List<String> RequestAct = FileLoader.execute("dictionaries/RequestAct.dic");
	public static List<String> Sugguest = FileLoader.execute("dictionaries/Suggest.dic");
	public static List<String> Thank = FileLoader.execute("dictionaries/Thank.dic");
}
