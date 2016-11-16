<?php
class Tangau{
	private $sender, $db, $bot;

	function __construct($sender, $bot){
		$this->sender = $sender;
		$this->bot = $bot;
		$this->db = new mysqli('localhost', 'root', 'selab15', 'test');
	}

	function check(){
        $user = $this->db->query("SELECT * FROM `tangau` WHERE `sender` = '".$this->sender."'");
        if($user->num_rows == 1){
            $user = $user->fetch_array();
            if($user['status'] == 1)
                return 2;
            else 
                return 1;
        } else
            return 0;
  }

  function plusSended(){
  	$this->db->query("UPDATE `tangau` SET `sended` = `sended` + 1 WHERE `sender` = '".$this->sender."'");
  }
  
  function reg(){
      $user = $this->bot->UserProfile($this->sender);
      $this->db->query("INSERT INTO `tangau` (`sender`, `gender`) VALUES ('".$this->sender."', '".$user->getGender()."')");
      if(!$this->find($this->sender))
        $this->bot->send(new Message($this->sender, "Bạn đã đăng ký tán gẫu thành công! Vui lòng chờ được ghép cặp...\nTrong lúc đó bạn có thể chat nhảm với tôi!"));
  }

  function send($command, $image){
      $this->plusSended();
      $sender = $this->db->query("SELECT * FROM `tangau` WHERE `sender` = '".$this->sender."'")->fetch_array();
      $info_request_check = $this->db->query("SELECT * FROM `tangau` WHERE `sender` = '".$sender['receiver']."'")->fetch_array();
      if($image == true){
        foreach($command['image'] as $img){
          $this->bot->send(new ImageMessage($sender['receiver'], $img));
        }
        $this->checkOffline($sender['sender'], $sender['receiver']);
      } else {
        if(preg_match('/^(help)$/', $this->chuan_hoa($command))){
          $this->help();
        } else if(preg_match('/^(info|traodoiinfo)$/', $this->chuan_hoa($command))){
          $this->requestInfo($sender);
        } else if($info_request_check['info_request'] == 1 && preg_match('/^(Ok)$/', $command)){
          $this->sendInfo($sender);
        } else  if($info_request_check['info_request'] == 1 && preg_match('/^(Nope)$/', $command)){
          $this->bot->send(new Message($sender['receiver'], "Người bên kia đã từ chối trao đổi thông tin cá nhân! Thính mạnh hơn nữa đi!"));
          $this->db->query("UPDATE `tangau` SET `info_request` = 0 WHERE `sender` = '".$sender['receiver']."'");
        } else {
          $this->bot->send(new Message($sender['receiver'], $command));
          $this->checkOffline($sender['sender'], $sender['receiver']);
        }
      }

  }

  function requestInfo($sender){
    $replies = array();
    $replies[] = array("content_type" => "text","title" => "Ok","payload" => "Ok");
    $replies[] = array("content_type" => "text","title" => "Nope","payload" => "Nope");
    $this->bot->send(new QuickReply($sender['receiver'], "Người bên kia muốn xem thông tin cá nhân của bạn!", $replies));
    $this->db->query("UPDATE `tangau` SET `info_request` = 1 WHERE `sender` = '".$sender['sender']."'");
  }

  function sendInfo($sender){
    $this->db->query("UPDATE `tangau` SET `info_request` = 0 WHERE `sender` = '".$sender['receiver']."'");
    $user = $this->bot->userProfile($sender['receiver']);
    $this->bot->send(new StructuredMessage($sender['sender'],
        StructuredMessage::TYPE_GENERIC,
        [
            'elements' => [
                new MessageElement($user->getLastName()." ".$user->getFirstName(), " ", $user->getPicture())
            ]
        ]
    ));
    $user = $this->bot->userProfile($sender['sender']);
    $this->bot->send(new StructuredMessage($sender['receiver'],
        StructuredMessage::TYPE_GENERIC,
        [
            'elements' => [
                new MessageElement($user->getLastName()." ".$user->getFirstName(), " ", $user->getPicture())
            ]
        ]
    ));
  }


  function find($user){
      $sender = $this->db->query("SELECT * FROM `tangau` WHERE `sender` = '".$user."'")->fetch_array();
      $find = $this->db->query("SELECT * FROM `tangau` WHERE `gender` <> '".$sender['gender']."' AND `status` = 0 ORDER BY RAND() LIMIT 1");
      if($find->num_rows == 1){
          $find = $find->fetch_array();
          $this->match($sender['sender'], $find['sender']);
          return true;
      } else
          return false;
  }

  function match($sender, $receiver){
      $this->db->query("UPDATE `tangau` set `status` = 1, `receiver` = '$receiver' WHERE `sender` = '$sender'");
      $this->db->query("UPDATE `tangau` set `status` = 1, `receiver` = '$sender' WHERE `sender` = '$receiver'");
      //Chat 'info' để gửi yêu cầu xem thông tin cá nhân người bên kia!\n
      $this->bot->send(new Message($sender, "Chat 'help' để được trợ giúp bất cứ lúc nào!"));
      $this->bot->send(new Message($sender, "Bạn đã được ghép cặp thành công! Hãy nói xin chào đi!"));
      $this->bot->send(new Message($receiver, "Chat 'help' để được trợ giúp bất cứ lúc nào!"));
      $this->bot->send(new Message($receiver, "Chúc mừng bạn đã được ghép cặp thành công! Hãy nói xin chào đi!"));
  }



  function countSended($user){
    $user = $this->db->query("SELECT * FROM `tangau` WHERE `sender` = '$user'")->fetch_array();
    return $user['sended'];
  }

  function checkOffline($sender, $receiver){
    if($this->countSended($sender) > 2 && $this->countSended($receiver) == 0)
      $this->off($receiver);
  }

  function off($user){
      $receiver = $this->db->query("SELECT * FROM `tangau` WHERE `receiver` = '$user'");
      $this->db->query("DELETE FROM `tangau` WHERE `sender` = '$user'");
      $this->bot->send(new Message($user, 'Bạn đã bị kick chế độ Ghép cặp - Tán gẫu. Để ghép lại, vui lòng chat Tán gẫu'));
      if($receiver->num_rows == 1){
          $receiver = $receiver->fetch_array();
          $this->bot->send(new Message($receiver['sender'], "Oops! Người ghép cặp với bạn đã nhận quá 3 tin nhắn mà không trả lời!\nVui lòng đợi để được ghép cặp với người khác!"));
          $this->bot->send(new Message($receiver['sender'], "Trong lúc đó, lại chat nhảm với tôi nhé :v"));
          $this->db->query("UPDATE `tangau` set `receiver` = null, `status` = 0, `sended` = 0 WHERE `receiver` = '$user'");
          $this->find($receiver['sender']);
      }
  }

  function out(){
      $receiver = $this->db->query("SELECT * FROM `tangau` WHERE `receiver` = '".$this->sender."'");
      $this->db->query("DELETE FROM `tangau` WHERE `sender` = '".$this->sender."'");
      $this->bot->send(new Message($this->sender, 'Bạn đã thoát chế độ Ghép cặp - Tán gẫu. Để ghép lại, vui lòng chat Tán gẫu'));
      if($receiver->num_rows == 1){
          $receiver = $receiver->fetch_array();
          $this->bot->send(new Message($receiver['sender'], "Oops! Người ghép cặp với bạn đã thoát chế độ Tán gẫu!\nVui lòng đợi để được ghép cặp với người khác!"));
          $this->bot->send(new Message($receiver['sender'], "Trong lúc đó, lại chat nhảm với tôi nhé :v"));
          $this->db->query("UPDATE `tangau` set `receiver` = null, `status` = 0, `sended` = 0 WHERE `sender` = '".$receiver['sender']."'");
          $this->find($receiver['sender']);
      }
  }

  function help(){
    $replies = array();
    $replies[] = array("content_type" => "text","title" => "Info","payload" => "Info");
    $replies[] = array("content_type" => "text","title" => "End","payload" => "End");
    $this->bot->send(new QuickReply($this->sender, "Chat 'info' để gửi yêu cầu trao đổi thông tin cá nhân!\nChat 'end' để kết thúc cuộc trò chuyện bất cứ lúc nào", $replies));
  }


  function close(){
    $this->db->close();
  }
}
?>