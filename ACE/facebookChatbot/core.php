<?php
class Core{
	const MODULES_DIR = './modules';
	const FB_APP_TOKEN = '';
	const VERIFY_TOKEN = '';

	function process($command, $sender){
        $image = false;
        if(!empty($command['message'])){
            $command = $command['message'];
        } else if(!empty($command['postback'])){
            $command = $command['postback'];
        } else if(!empty($command['image'])){
            $image = true;
        }
        
        $bot = new FbBotApp(self::FB_APP_TOKEN);
        $tangau = new Tangau($sender, $bot);
        $check = $tangau->check();

        $in = preg_match('/^(tangau|batdau|in|ghepcap)$/', self::chuan_hoa($command));
        $out = preg_match('/^(end|out|ketthuc)$/', self::chuan_hoa($command));
        $huy = preg_match('/^(huy)$/', self::chuan_hoa($command));

        if($check == 0 && $in)
          $tangau->reg();
          //$bot->send(new Message($sender, "Cảm ơn bạn đã quan tâm!\nChức năng tán gẫu đang tạm đóng để bảo trì.\nChat help để xem các chức năng khác!"));
        else if($check == 0 && $out)
            $bot->send(new Message($sender, "Bạn chưa đăng ký tán gẫu\nVui lòng chat Tán gẫu để bắt đầu!"));
        else if($check == 1 && $in)
            $bot->send(new Message($sender, "Bạn đã đăng ký tán gẫu rồi\nVui lòng đợi được ghép cặp!"));
        else if($check == 2 && $in)
            $bot->send(new Message($sender, "Bạn đã được ghép cặp rồi, còn đòi đăng ký gì nữa?"));
        else if(($check == 2 || $check == 1) && $out)
            $tangau->out();
        else if($check == 2)
            $tangau->send($command, $image);
        else {
            if($image){
                $bot->send(new Message($sender, "Bot không nhận ảnh ngoài chức năng Tán gẫu!"));
            }
            else {
                $bot->send(new SenderAction($sender));
                $modules = self::listModules();
                $messages = array();

                foreach($modules as $moduleName){
                    include(self::MODULES_DIR.'/'.$moduleName.'.php');
                    $module = new $moduleName($sender);
                    $response = $module->process($command);
                    if($response != null)
                        $messages[] = $response ;
                }

                $totalMessage = sizeof($messages);

                if($totalMessage > 1){
                    $index = 0;
                    for($i = 1; $i < $totalMessage; $i++){
                        if($messages[$i]['priority'] >= $messages[$index]['priority'])
                            $index = $i;
                    }
                    return $messages[$index];
                } else
                    return $messages[0];
            }
        }
        $tangau->close();
	}

	function listModules(){
		$handle = opendir(self::MODULES_DIR);
		$listModule = array();
	    while (false !== ($entry = readdir($handle))) {
	        if ($entry != "." && $entry != "..") {
	        	$filename = explode('.', $entry);
	            if($filename[1] == 'php')
	            	$listModule[] = $filename[0];
	        }
	    }
	    closedir($handle);
	    return $listModule;
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
	
}

class FbBotApp{
    /**
     * Request type GET
     */
    const TYPE_GET = "get";
    
    /**
     * Request type POST
     */
    const TYPE_POST = "post";

    /**
     * Request type DELETE
     */
    const TYPE_DELETE = "delete";
    
    /**
     * FB Messenger API Url
     *
     * @var string
     */
    protected $apiUrl = 'https://graph.facebook.com/v2.6/';
    
    /**
     * @var null|string
     */
    protected $token = null;

    /**
     * FbBotApp constructor.
     * @param string $token
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Send Message
     *
     * @param Message $message
     * @return array
     */
    public function send($message)
    {
        return $this->call('me/messages', $message->getData());
    }

    /**
     * Get User Profile Info
     *
     * @param int    $id
     * @param string $fields
     * @return UserProfile
     */
    public function userProfile($id, $fields = 'first_name,last_name,profile_pic,locale,timezone,gender')
    {
        return new UserProfile($this->call($id, [
            'fields' => $fields
        ], self::TYPE_GET));
    }

    /**
     * Set Persistent Menu
     *
     * @see https://developers.facebook.com/docs/messenger-platform/thread-settings/persistent-menu
     * @param MessageButton[] $buttons
     * @return array
     */
    public function setPersistentMenu($buttons)
    {
        $elements = [];

        foreach ($buttons as $btn) {
            $elements[] = $btn->getData();
        }

        return $this->call('me/thread_settings', [
            'setting_type' => 'call_to_actions',
            'thread_state' => 'existing_thread',
            'call_to_actions' => $elements
        ], self::TYPE_POST);
    }

    /**
     * Remove Persistent Menu
     *
     * @see https://developers.facebook.com/docs/messenger-platform/thread-settings/persistent-menu
     * @return array
     */
    public function deletePersistentMenu()
    {
        return $this->call('me/thread_settings', [
            'setting_type' => 'call_to_actions',
            'thread_state' => 'existing_thread'
        ], self::TYPE_DELETE);
    }

    /**
     * Request to API
     *
     * @param string $url
     * @param array  $data
     * @param string $type Type of request (GET|POST|DELETE)
     * @return array
     */
    protected function call($url, $data, $type = self::TYPE_POST)
    {
        $data['access_token'] = $this->token;

        $headers = [
            'Content-Type: application/json',
        ];

        if ($type == self::TYPE_GET) {
            $url .= '?'.http_build_query($data);
        }

        $process = curl_init($this->apiUrl.$url);
        curl_setopt($process, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($process, CURLOPT_HEADER, false);
        curl_setopt($process, CURLOPT_TIMEOUT, 30);
        
        if($type == self::TYPE_POST || $type == self::TYPE_DELETE) {
            curl_setopt($process, CURLOPT_POST, 1);
            curl_setopt($process, CURLOPT_POSTFIELDS, http_build_query($data));
        }

        if ($type == self::TYPE_DELETE) {
            curl_setopt($process, CURLOPT_CUSTOMREQUEST, "DELETE");
        }

        curl_setopt($process, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($process, CURLOPT_SSL_VERIFYHOST, 0);
		curl_setopt($process, CURLOPT_SSL_VERIFYPEER, 0);
        $return = curl_exec($process);
        curl_close($process);

        return json_decode($return, true);
    }
}

class UserProfile
{
    protected $data = [];

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function getFirstName()
    {
        return $this->data['first_name'];
    }

    public function getLastName()
    {
        return $this->data['last_name'];
    }

    public function getPicture()
    {
        return $this->data['profile_pic'];
    }

    public function getLocale()
    {
        return $this->data['locale'];
    }

    public function getTimezone()
    {
        return $this->data['timezone'];
    }

    public function getGender()
    {
        return $this->data['gender'];
    }
}
?>