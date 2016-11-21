<?php
class Math{
	CONST PRIORITY = '5';

	private $sender = '';

	function __construct($sender){
		$this->sender = $sender;
	}

	function process($command){
		include('../messageType.php');

		$response['priority'] = self::PRIORITY;
		$message = self::math($command);
		if($message != ''){
			$response['messages'][] = new Message($this->sender, $message);
			return $response;
		} else
			return null;
	}

	function math($command){
		$url = 'https://coccoc.com/composer/math?p=0&q='.urlencode($command);
		$result = json_decode(file_get_contents($url), true);
		if(!empty($result['math']['variants'])){
			$callback = '';
			if(count($result['math']['variants'][0]['answers']) == 1)
				$callback = $result['math']['variants'][0]['answers'][0]['replaced_formula'];
			else
				for($i=0; $i<count($result['math']['variants'][0]['answers']); $i++)
					if(is_numeric($result['math']['variants'][0]['answers'][$i]['replaced_formula']))
						$callback = '= '.$result['math']['variants'][0]['answers'][$i]['replaced_formula'];
			return $callback;
		} else
			return '';
	}

}
?>