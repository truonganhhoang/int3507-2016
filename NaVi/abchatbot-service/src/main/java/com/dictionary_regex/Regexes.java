package com.dictionary_regex;

public class Regexes {
	public static final String date_2w = "((ngày|hôm) \\d{1,2})|((ngày|hôm) \\d{1,2}(/|-|.)\\d{1,2})|(tháng \\d{1,2})|(tháng \\d{1,2})/\\d{4}";
	public static final String date_1w = "\\d{1,2}(/|-|.)\\d{1,2}";
	public static final String time_2w = "(1[0-9]|2[0-3]|[0-9])\\s(giờ|rưỡi)";
	public static final String time_1w = "(1[0-9]|2[0-3]|[0-9])(h|(:\\d{1,2}))";
	public static final String dayOfWeek_2w = "((thứ)\\s(hai|ba|tư|năm|sáu|bảy))|(chủ nhật)";
}
