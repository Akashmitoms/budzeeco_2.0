<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require  './PHPMailer/src/Exception.php';
require  './PHPMailer/src/PHPMailer.php';
require  './PHPMailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(204);
    exit;
}



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

   

    $name = $data['name'];
    $phone = $data['phone'];
    $age = $data['age'];
    $city = $data['city'];
    $occupation = $data['occupation'];
    $industry = $data['industry'];
    $income = $data['income'];
    $subject = 'Book a Call';
    $message ='Name: '.$name.'<br>Phone: '.$phone.'<br>Age: '.$age.'<br>City: '.$city.'<br>Occupation: '.$occupation.'<br>Industry: '.$industry.'<br>Income: '.$income;
    


    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();                                            
        $mail->Host       = 'smtp.hostinger.com';  // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'connect@budzeeco.com';                    
        $mail->Password   = 'Anoop@@420';                               
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
        $mail->Port       = 587;                                    

        //Recipients
        $mail->setFrom('connect@budzeeco.com');
        $mail->addAddress('connect@budzeeco.com');     // Add a recipient

        // Content
        $mail->isHTML(true);                                  
        $mail->Subject = $subject;
        $mail->Body    = "Hi Anoop,<br><br>$message";

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Failed to send email. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
