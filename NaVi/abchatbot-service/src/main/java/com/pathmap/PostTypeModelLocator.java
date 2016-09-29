/**
 * 
 */

package com.pathmap;

import jmdn.base.util.filesystem.FileLoader;
import jmdn.base.util.string.StrUtil;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Xuan-Hieu Phan (pxhieu@gmail.com)
 * @version 1.1
 * @since 31-10-2014
 */
public class PostTypeModelLocator {
	private static String modelPropertiesFile = null;
	private static Map<String, String> propertiesMap = null;

	static {
		modelPropertiesFile = "model/models.properties";
		propertiesMap = new HashMap<String, String>();

		loadProperties();
	}

	private static void loadProperties() {
		List<String> lines = FileLoader.readFile(modelPropertiesFile, "UTF8");

		if (lines.size() <= 0) {
			System.out.println("Couldn't load " + modelPropertiesFile + " or the file is empty!");
		}

		for (int i = 0; i < lines.size(); i++) {
			String line = StrUtil.normalizeString(lines.get(i));

			if (line.startsWith("#")) {
				continue;
			}

			List<String> tokens = StrUtil.tokenizeString(line, "= \t\r\n");
			if (tokens.size() >= 2) {
				String key = tokens.get(0);
				String value = tokens.get(1);

				if (!value.startsWith("/")) {
					value = "/" + value;
				}

				propertiesMap.put(key.toLowerCase(), value);
				System.out.println("Key: " + key + ", value: " + value);
			}
		}
	}

	/**
	 * Getting the location (path) of a model file or directory.
	 * 
	 * @param modelKey
	 *            the model key
	 * @return The location of the model file/directory if it exists, null
	 *         otherwise
	 */
	public static String getModelLocation(String modelKey) {
		return propertiesMap.get(modelKey.toLowerCase());
	}
}
