<?php
class Dictionary{
	CONST PRIORITY = '3';

	private $sender = '';

	function __construct($sender){
		$this->sender = $sender;
	}

	function process($command){
		include('../messageType.php');

		$response['priority'] = self::PRIORITY;
		$message = self::dictionary($command);
		if($message != ''){
			$response['messages'][] = new Message($this->sender, $message);
			return $response;
		} else
			return null;
	}

	function dictionary($command){
		$url = 'http://tratu.soha.vn/extensions/curl_suggest.php?search='.urlencode($command).'&dict=en_vn';
		$result = file_get_contents($url);
		$result = strip_tags(htmlspecialchars_decode(self::cut_str($result, '<rs id="0" type="0" mean="', '"')));
		if(!empty($result)){
			return $result;
		} else
			return '';
	}

	function cut_str($str,$find_start,$find_end)
	{
		$start = stripos($str, $find_start);
		if($start===false) return "";
		$length = strlen($find_start);
		$end = stripos(substr($str, $start+$length), $find_end);
		return trim(substr($str, $start+$length, $end));
	}
}
?>