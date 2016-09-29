package com.maxent;

import org.kohsuke.args4j.Option;

public class CmdOption {
	@Option(name="-datadir", usage="Specify the data directory")
	public String dataDir = "./";
	
	@Option(name="-ext", usage="Specify file extension")
	public String fileExtension = ".*";
	
	@Option(name="-noparts", usage="Specify the number of partitions")
	public int noParts = 5;
}
