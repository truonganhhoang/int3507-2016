<?php
class helloworld{
	//Hang Priority de kiem tra do uu tien neu 1 $command ra respone khac nhau cua cac module
	CONST PRIORITY = '1';

	private $sender = '';

	function __construct($sender){
		$this->sender = $sender;
	}

	function process($command){
		include('../messageType.php');
		$response['priority'] = self::PRIORITY;
		$response['messages'][] = new Message($this->sender, "Hello, world!");
		return $response;	
	}

}
?>