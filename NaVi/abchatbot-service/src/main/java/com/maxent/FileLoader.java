/*
 * Author: Duong Quang Vu - K57CLC,UET,VNU
 */
package com.maxent;

/*
 * Create by DUONG QUANG VU - K57CLC - UET,VNU
 */
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FileLoader {
	public static List<String> execute(String location){
		List<String> lines = new ArrayList<String>();
		FileReader fr;
		try {
			fr = new FileReader(location);
			BufferedReader br = new BufferedReader(fr);
			String line;
			try {
				while( (line = br.readLine()) != null ){
					lines.add(line);
				}
				br.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				System.err.println(e.toString());
			}
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		return lines;
	}
	
	public static List<String> loadFileFromFolder(String location, String filetype) throws FileNotFoundException {
		File folder = new File(location);
		File[] listOfFiles = folder.listFiles();
		List<String> lines = new ArrayList<String>();
		System.err.println("Loading file ...");
		int count = 0;
		for (int i = 0; i < listOfFiles.length; i++) {
			if(!listOfFiles[i].getName().contains(filetype))
				continue;
			count++;
			FileReader fr = new FileReader(location + "/" + listOfFiles[i].getName());
			System.out.println(location + "/" + listOfFiles[i].getName());
			BufferedReader br = new BufferedReader(fr);
			String line;
			try {
				while ((line = br.readLine()) != null) {
					if( !line.contains("####") )
						lines.add(line);
				}
				br.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				System.err.println(e.toString());
			}
		}
		System.out.println("Total file:" +  count);
		return lines;
	}

}
