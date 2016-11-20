<?php
class Professor{
	//Hang Priority de kiem tra do uu tien neu 1 $command ra respone khac nhau cua cac module
	CONST PRIORITY = '3';

	private $sender = '';

	function __construct($sender){
		$this->sender = $sender;
	}

	function process($command){
		$tach = str_word_count(self::chuan_hoa($command, false),1);
		if(preg_match('/^(giaosu|giangvien|thaygiao|cogiao|tiensi|tiensy|thacsi|thacsy)$/', $tach[0].$tach[1])){
			for($i = 2; $i<count($tach); $i++)
				$name .= $tach[$i];
			return self::professor($name);
		} else if(preg_match('/^(thay|co|gs|ts|ths|pgs)$/', $tach[0])){
			for($i = 1; $i<count($tach); $i++)
				$name .= $tach[$i];
			return self::professor($name);
		} else 
			return null;
		
	}

	function professor($query){
		include('../messageType.php');
		//fix bug giang vien -> gianien
		$db = new mysqli('', '', '', '');
		mysqli_set_charset($db,"utf8");
		$get_gv = $db->query('SELECT * FROM `prof`');
		$gv = array();
		while($row = $get_gv->fetch_assoc()){
			if(preg_match('/('.$query.')/', self::chuan_hoa($row['ten'])))
				$gv[] = $row;
		}

		$response['priority'] = self::PRIORITY;
		if(count($gv) == 0){
			$response['messages'][] = new Message($this->sender, 'Không tìm thấy giảng viên phù hợp!');
			return $response;
		}
		else {
			foreach($gv as $row){
				$msg = '';
				$msg .= "Giảng viên: ".$row['ten'];
				if($row['nganh'] != '')
					$msg .= " - Ngành: ".$row['nganh'];
				if($row['nhanxet'] != '')
					$msg .= "\nNhận xét: ".$row['nhanxet'];
				if($row['sdt'] != '')
					$msg .= "\n SĐT: ".$row['sdt'];
				if($row['email'] != '')
					$msg .= "\n Email: ".$row['email'];
				if($row['web'] != '')
					$msg .= "\n Website: ".$row['web'];
				if($row['web'] != '')
				$msg .= "\n Nơi làm việc: ".$row['diachi'];
				$response['messages'][] = new Message($this->sender, $msg);
				if(count($response['messages']) > 5)
					break;
			}
			return $response;
		}
		$db->close();
	}

	function has_str($str, $find){
		$str = $this->chuan_hoa($str);
		$key = explode('|', $find);
		$check = '';
		for($i = 0; $i < sizeof($key); $i++){
			if(strpos($str, $key[$i]) !== false){
				$check = str_replace($key[$i], '', $str);
				break;
			}
		}
		return $check;
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