<?php
class Place{
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
		if(preg_match('/^(tim|find)$/', $tach[0])){
			$command = substr(strstr($command," "), 1);
			$command = str_replace('gan ', '', $command);

			$messages = self::map($command);
			if($messages != null){
				foreach($messages as $msg){
					$message [] = new MessageElement($msg['title'], $msg['address'], $msg['img'], [
                                    new MessageButton(MessageButton::TYPE_WEB, 'Chỉ đường', $msg['map'])
                                ]);
                    
				}
				$response['messages'][] = new StructuredMessage($this->sender,
                        StructuredMessage::TYPE_GENERIC,
                        [
                            'elements' => $message
                        ]
                    );
				return $response;
			} else {
				$response['messages'][] = new Message($this->sender, 'Không tìm thấy địa danh cần tìm!');
				return $response;
			}
		} else
			return null;
	}

	function map($command, $limit=10){
		$url = 'https://map.coccoc.com/map/search.json?borders=21.057370578834792%2C105.58791028130202%2C21.102219261249076%2C106.05688916313795&query='.urlencode($command);
		$result = json_decode(self::fetch($url), true);
		if(!empty($result)){
			$i=0;
			while(!empty($result[$i]) && $i<$limit){
				$place['title'] = strip_tags($result[$i]['title']);
				$place['address'] = strip_tags($result[$i]['address']);
				$place['img'] = 'https:'.$result[$i]['img_big'];
				$place['map'] = 'http://maps.google.com/?saddr=Current+Location&daddr='.$place['address'];
				$callback[] = $place;
				$i++;
			}
			return $callback;
		} else
			return null;
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