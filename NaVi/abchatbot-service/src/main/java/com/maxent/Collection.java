package com.maxent;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

public class Collection {
	public List<Newspaper> collection;
	public Newspaper np;
	
	public Collection() throws FileNotFoundException {
		collection = new ArrayList<Newspaper>();
		//Load newspapers from "ts-nts" folder of "categories" folder
		List<String> lines = FileLoader.loadFileFromFolder("data/ts-nts", ".txt");
		int dem = 0;
		for( int i = 0; i < lines.size(); i = i + 6 ){
			np = new Newspaper(lines.get(i+1), lines.get(i+3), lines.get(i+4), lines.get(i+5));
			//System.out.println(lines.get(i+1) +"\n"+ lines.get(i+3)+"\n"+lines.get(i+4)+"\n"+lines.get(i+5));
			dem++;
		
			collection.add(np);
		}
		System.out.println(dem);
	}

	public List<Newspaper> getCollection() {
		return collection;
	}
	
}
