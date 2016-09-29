package com.maxent;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

import jmdn.base.struct.collection.CollectionUtil;
import jmdn.base.util.filesystem.DirFileUtil;
import jmdn.base.util.filesystem.FileSaver;
import jmdn.base.util.string.StrUtil;
import jmdn.model.pathmap.ModelLocator;
import jmdn.nlp.vnsentsegmenter.VnSentSegmenter;
import org.kohsuke.args4j.CmdLineException;
import org.kohsuke.args4j.CmdLineParser;

public class GenTrain_TestData {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		CmdOption cmdOption = new CmdOption();
		CmdLineParser parser = new CmdLineParser(cmdOption);
		args = new String[6];
		args[0] = "-datadir";
		args[1] = "data/train-test";
		args[2] = "-ext";
		args[3] = ".csv";
		args[4] = "-noparts";
		args[5] = "5";

		try {
			if (args.length == 0) {
				showHelp(parser);
				return;
			}

			parser.parseArgument(args);

			perform(cmdOption);

		} catch (CmdLineException cle) {
			System.out.println("Command line error: " + cle.getMessage());
			showHelp(parser);

		} catch (Exception ex) {
			System.out.println("Error in main: " + ex.getMessage());
		}
	}

	public static void perform(CmdOption cmdOption) throws FileNotFoundException {

		List<String> cpsLabelList = new ArrayList<String>();
		List<String> datalines = FileLoader.execute("data/UserIntentClassification.csv");
		System.out.println("done!");
		for (int i = 0; i < datalines.size(); i++) {
			List<String> cpsLabel = FeatureGenerator.scanFeaturesForTraining(datalines.get(i));
			System.out.println("done: " + i);
			cpsLabelList.add(StrUtil.join(cpsLabel));
		}
		List<String> cpsLabelList1 = new ArrayList<String>();
		List<String> cpsLabelList2 = new ArrayList<String>();
		
		CollectionUtil<String> collectionUtil = new CollectionUtil<String>();
		collectionUtil.randomPartition(cpsLabelList, cpsLabelList1, cpsLabelList2, cmdOption.noParts);
		
		System.out.println("Size of first observation collection: " + cpsLabelList1.size());
		System.out.println("Size of second observation collection: " + cpsLabelList2.size());

		FileSaver.saveListString(cpsLabelList1,
				DirFileUtil.getFullFilename(cmdOption.dataDir, "test.tagged"), "UTF-8");
		FileSaver.saveListString(cpsLabelList2,
				DirFileUtil.getFullFilename(cmdOption.dataDir, "train.tagged"), "UTF-8");
	}

	public static void showHelp(CmdLineParser parser) {
		System.out.println("GenTrainingDataForDomain [options ...] [arguments ...]");
		parser.printUsage(System.out);
	}
}
