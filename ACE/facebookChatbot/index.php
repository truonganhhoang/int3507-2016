<?php
	//Model File
include('core.php');

include('tangau.php');
include('messageType.php');

use Core as Model;

// Make Bot Instance
$bot = new FbBotApp(Model::FB_APP_TOKEN);

	// Receive something
if (!empty($_REQUEST['hub_mode']) && $_REQUEST['hub_mode'] == 'subscribe' && $_REQUEST['hub_verify_token'] == Model::VERIFY_TOKEN) {
    // Webhook setup request
    echo $_REQUEST['hub_challenge'];
} else {
    // Other event
    $data = json_decode(file_get_contents("php://input"), true, 512, JSON_BIGINT_AS_STRING);
    if (!empty($data['entry'][0]['messaging'])) {
        foreach ($data['entry'][0]['messaging'] as $message) {

            // Skipping delivery messages
            if (!empty($message['delivery'])) {
                continue;
            }

            $command = "";

            // When bot receive message from user
            if (!empty($message['message'])) {
                $command['message'] = $message['message']['text'];
            // When bot receive button click from user
            } 
            if (!empty($message['postback'])) {
                $command['postback'] = $message['postback']['payload'];
            }
            if (count($message['message']['attachments']) > 0) {
                foreach($message['message']['attachments'] as $image){
                    $command['image'][] = $image['payload']['url'];
                }
            }

            $responses = Model::process($command, $message['sender']['id']);
            foreach($responses['messages'] as $response){
                $bot->send($response);
            }
            
        }
    }
}

?>