<?php
class Greeting{
	//Hang Priority de kiem tra do uu tien neu 1 $command ra respone khac nhau cua cac module
	CONST PRIORITY = '4';

	private $sender = '';

	function __construct($sender){
		$this->sender = $sender;
	}

	function process($command){
		include('../messageType.php');

		$response['priority'] = self::PRIORITY;

		if(preg_match('/^(xinchao|chao|hi|hello)$/', self::chuan_hoa($command))){
			$response['messages'][] = new Message($this->sender, "Xin chào,\nTôi là UET CoolBot");
			return $response;
		} else if(preg_match('/^(room)$/', self::chuan_hoa($command))){
			$replies = array();
			$replies[] = array("content_type" => "text","title" => "#tech","payload" => "#tech");
			$replies[] = array("content_type" => "text","title" => "#general","payload" => "#general");
			$response['messages'][] = new QuickReply($this->sender, "Chọn chủ đề hoặc tạo room với chủ đề riêng của bạn với cú pháp #chúđề", $replies);
			return $response;
		} else if(preg_match('/^(help|trogiup|huongdan)$/', self::chuan_hoa($command))){
      $response['messages'][] = new Message($this->sender, "Danh sách chức năng và Hướng dẫn sử dụng của UET CoolBot");
      $response['messages'][] = new StructuredMessage($this->sender,
                        StructuredMessage::TYPE_GENERIC,
                        [
                            'elements' => [
                              new MessageElement("Dự báo thời tiết", "Chat 'thời tiết' + địa danh để xem dự báo thời tiết khu vựa đó", "", [
                                    new MessageButton(MessageButton::TYPE_POSTBACK, 'Thời tiết')
                                ]),
                              new MessageElement("Làm toán", "Chat biểu thức toán học cần tính", "",[
                                    new MessageButton(MessageButton::TYPE_POSTBACK, 'x^2 - 2x + 1 = 0')
                                ]),
                              new MessageElement("Dịch TỪ tiếng Anh", "chat TỪ tiếng Anh cần dịch ra tiếng Việt", "",[
                                    new MessageButton(MessageButton::TYPE_POSTBACK, 'Forest')
                                ]),
                              new MessageElement("Dịch Anh<->Việt", "chat 'dịch' + đoạn hội thoại cần dịch", "",[
                                    new MessageButton(MessageButton::TYPE_POSTBACK, 'dịch anh yêu em')
                                ]),
                              new MessageElement("Tìm địa danh, địa chỉ", "chat 'tìm' + địa danh cần tìm", "",[
                                    new MessageButton(MessageButton::TYPE_POSTBACK, 'tìm quán bún chả')
                                ]),
                              new MessageElement("Ghép cặp - Tán gẫu", "chat 'Tán gẫu' hoặc 'IN' để bắt đầu tìm người tán gẫu!", "",[
                                    new MessageButton(MessageButton::TYPE_POSTBACK, 'tán gẫu')
                                ]),
                              new MessageElement("Chat nhảm nhí", "chat bất cứ thứ gì bạn thích, BOT sẽ trả lời 1 cách nhảm nhí", "",[
                                    new MessageButton(MessageButton::TYPE_POSTBACK, 'say something')
                                ])
                            ]
                        ]
                    );

			return $response;
		}	else if(preg_match('/(saysomething|noigidi)/', self::chuan_hoa($command))) {
			$response['messages'][] = new Message($this->sender, "Bạn có thích ăn rau dền không?");
			return $response;
		} else
			return null;
		
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
      return trim(strtolower(str_replace(' ', '', $str)));
    }
}
?>