<?php
class Room{
	private $sender, $db, $bot;

	function __construct($sender, $bot){
		$this->sender = $sender;
		$this->bot = $bot;
		$this->db = new mysqli('localhost', 'root', 'selab15', 'test');
	}

	function check(){
		$user = $this->db->query("SELECT * FROM `users` WHERE `id` = '".$this->sender."'");
		if($user->num_rows == 1){
			return true;
		} else
			return false;
	}
  
  function reg($topic){
	  $topic = str_replace('#', '',$topic);
	  $count = $this->countPeople($topic);
	  if($count == 0){
		  $roomID = $this->createRoom($topic);
	  } else {
		  $roomID = $this->findRoom($topic);
	  }
	  $count++;
	$character = $this->db->query("SELECT * FROM `character` WHERE `id` NOT IN (SELECT `character` FROM `users` WHERE `room` = '{$roomID}') ORDER BY RAND() LIMIT 1")->fetch_array();
	$this->db->query("INSERT INTO `users` (`id`, `room`, `character`) VALUES ('{$this->sender}', '{$roomID}', '".$character['id']."')");
	$this->bot->send(new Message($this->sender, "Bạn đã vào room với chủ đề {$topic} thành công"));
	if($count != 1){
		$message = $character['name'].' vừa tham gia vào phòng chat';
		$this->sendAllRoom($roomID, $message);
	}
  }
  
  function sendAllRoom($room, $message){
	  $users = $this->db->query("SELECT * FROM `users` WHERE `room` = '".$room."' AND `id` <> '".$this->sender."'");
	  while($user = $users->fetch_assoc()){
		  $this->bot->send(new Message($user['id'], $message));
	  }
  }
  function createRoom($topic){
	  $topic = $this->db->query("SELECT * FROM `topic` WHERE `name` = '{$topic}'")->fetch_array();
	  $this->db->query("INSERT INTO `room` (`topic`) VALUES ('".$topic['id']."')");
	  return $this->db->insert_id;
  }
  
	function findRoom($topic){
		$topics = $this->db->query("SELECT * FROM `topic` WHERE `name` = '{$topic}'")->fetch_array();
		$rooms = $this->db->query("SELECT * FROM `room` WHERE `topic` = '".$topics['id']."'");
		while($room = $rooms->fetch_assoc()){
			$users = $this->db->query("SELECT * FROM `users` WHERE `room` = '".$room['id']."'")->num_rows;
			if($users < 12)
				return $room['id'];
		}
	}
	
	function getRoom(){
     $room = $this->db->query("SELECT * FROM `users` WHERE `id` = '{$this->sender}'")->fetch_array();
	 return $room['room'];
	}
  
  function checkCommand($command){
	  if(str_word_count($command) == 1 && $command[0] == '#')
		  return true;
	  else
		  return false;
  }
  
  function countPeople($topic){
		$topics = $this->db->query("SELECT * FROM `topic` WHERE `name` = '{$topic}'");
		if($topics->num_rows == 0){
			$this->db->query("INSERT INTO `topic` (`name`) VALUE('{$topic}') ");
			return 0;
		} else {
			$topics = $topics->fetch_array();
			$rooms = $this->db->query("SELECT * FROM `room` WHERE `topic` = '".$topics['id']."'");
			if($rooms->num_rows == 0)
				return 0;
			else if($rooms->num_rows == 1){
				$rooms = $rooms->fetch_array();
				return $this->db->query("SELECT * FROM `users` WHERE `room` = '".$rooms['id']."'")->num_rows;
			} else {
				while($room = $rooms->fetch_assoc()){
					$users = $this->db->query("SELECT * FROM `users` WHERE `room` = '".$room['id']."'")->num_rows;
					if($users < 12)
						return $users;
				}
				return 0;
			}
		}
  }

  function send($command){
	  $character = $this->db->query("SELECT * FROM `character` WHERE `id` = '".$this->getCharacter()."'")->fetch_array();
	 $this->sendAllRoom($this->getRoom(), $character['name'].": ".$command);
  }
  
  function getCharacter(){
     $user = $this->db->query("SELECT * FROM `users` WHERE `id` = '{$this->sender}'")->fetch_array();
	 return $user['character'];
  }

  function out(){
      $user = $this->db->query("SELECT * FROM `users` WHERE `id` = '".$this->sender."'")->fetch_array();
      $this->db->query("DELETE FROM `users` WHERE `id` = '".$this->sender."'");
	$this->bot->send(new Message($this->sender, "Bạn đã ra khỏi chế độ room!"));
      if($this->db->query("SELECT * FROM `users` WHERE `room` = '".$user['room']."'")->num_rows == 0)
		  $this->db->query("DELETE FROM `room` WHERE `id` = '".$user['room']."'");
	  else{
		  $character = $this->db->query("SELECT * FROM `character` WHERE `id` = '".$user['character']."'")->fetch_array();
		  $this->sendAllRoom($user['room'], $character['name']." đã rời khỏi room!");
	  }
		  
  }

  function help(){
    $replies = array();
    $replies[] = array("content_type" => "text","title" => "Info","payload" => "Info");
    $replies[] = array("content_type" => "text","title" => "End","payload" => "End");
    $this->bot->send(new QuickReply($this->sender, "Chat 'info' để gửi yêu cầu trao đổi thông tin cá nhân!\nChat 'end' để kết thúc cuộc trò chuyện bất cứ lúc nào", $replies));
  }

  function chuan_hoa($str) {
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
    return trim(strtolower(str_replace(' ', '',$str)));
  }

  function close(){
    $this->db->close();
  }
}
?>