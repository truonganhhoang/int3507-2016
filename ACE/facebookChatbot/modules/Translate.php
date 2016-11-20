<?php
class Translate{
	CONST PRIORITY = '5';

	private $sender = '';

	function __construct($sender){
		$this->sender = $sender;
	}

	function process($command){
		include('../messageType.php');

		$response['priority'] = self::PRIORITY;
		$command = self::chuan_hoa($command, false);
		$tach = str_word_count($command,1);
		if(preg_match('/^(dich|translate)$/', $tach[0])){
			$command = substr(strstr($command," "), 1);
			$message = self::translate($command);
			if($message != ''){
				$response['messages'][] = new Message($this->sender, $message);
				return $response;
			} else {
				$response['messages'][] = new Message($this->sender, 'Xin lỗi Bot không thể dịch cho bạn!');
				return $response;
			}
		} else
			return null;

	}

	function translate($command){
		$lang = 'en';
		$url = 'https://www.google.com.vn/async/translate?vet=00ahUKEwjt6tim2_jOAhUBOZQKHUnbCIMQqDgIKjAA..i&ei=LKbNV-2kBYHy0ATJtqOYCA&yv=2';
		$z['post'] = 'async=translate,sl:auto,tl:'.$lang.',st:'.urlencode($command).',id:1473095230427,qc:false,ac:false,_id:tw-async-translate,_pms:s';
		$z['refer'] = 'https://www.google.com.vn/';
		$result = self::fetch($url, $z);
		$lang_detect = self::cut_str($result, 'id=\"tw-answ-detected-sl\"\u003E', '\u003C\/span\u003E\u003C');
		if($lang_detect == $lang){
			$lang = 'vi';
			$z['post'] = 'async=translate,sl:auto,tl:'.$lang.',st:'.urlencode($command).',id:1473095230427,qc:false,ac:false,_id:tw-async-translate,_pms:s';
			$result = self::fetch($url, $z);
		}
		$translated = self::cut_str($result, 'id=\"tw-answ-target-text\"\u003E', '\u003C\/span\u003E\u003C');
		if(!empty($translated)){
			return $translated;
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

	function fetch($url, $z=null){
	    $ch = curl_init();

	    $useragent = isset($z['useragent']) ? $z['useragent'] : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36';

	    curl_setopt($ch, CURLOPT_URL, $url);
	    curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	    curl_setopt($ch, CURLOPT_AUTOREFERER, true);
	    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, (isset($z['timeout']) ? $z['timeout'] : 5));
	    curl_setopt($ch, CURLOPT_POST, isset($z['post']));

	    if(isset($z['post']))
	        curl_setopt($ch, CURLOPT_POSTFIELDS, $z['post']);
	    if(isset($z['refer']))        
	        curl_setopt($ch, CURLOPT_REFERER, $z['refer']);
	    if(isset($z['cookiefile'])){
	        curl_setopt($ch, CURLOPT_COOKIEJAR,  $z['cookiefile']);
	        curl_setopt($ch, CURLOPT_COOKIEFILE, $z['cookiefile']);   
	    }

	    $result = curl_exec($ch);
	    curl_close($ch);
	    return $result;
	}
	function chuan_hoa($str, $rmblank = true) {
      $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
      $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
      $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
      $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
      $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
      $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
      $str = preg_replace("/(đ)/", 'd', $str);
      $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
      $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
      $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
      $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
      $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
      $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
      $str = preg_replace("/(Đ)/", 'D', $str);
      //$str = str_replace(" ", "-", str_replace("&*#39;","",$str));
	  if($rmblank == true)
		return trim(strtolower(str_replace(' ', '',$str)));
	  else
		return trim(strtolower($str));
    }
}
?>