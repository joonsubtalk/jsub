<?php
header("Access-Control-Allow-Origin: *");

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $POSTED = $obj;
}

// Recipient email
$toEmail = 'joonsubtalk@gmail.com';
$emailSubject = ' submitted by '.$POSTED['clientName'];

if ($POSTED['type'] == 'inquiry') {
    $emailSubject = '[Site Inquiry]' . $emailSubject;
    $htmlContent = '<h2>Contact Request Submitted</h2>
    <h4>Name: </h4>'.$POSTED['clientName'].'</p>
    <h4>typeOfProject: </h4>'.$POSTED['typeOfProject'].'<br />
    <h4>clientEmail: </h4>'.$POSTED['clientEmail'].'<br />';
}
elseif ($POSTED['type'] == 'started') {
    $toEmail = 'info@coramdesigncenter.com';
    $emailSubject = '[Get Started REQ]' . $emailSubject;
    $htmlContent = '<h2>Contact Request Submitted</h2>
    <h4>fname: </h4>'.$POSTED['fname'].'</p>
    <h4>lname: </h4>'.$POSTED['lname'].'</p>
    <h4>email: </h4>'.$POSTED['email'].'</p>
    <h4>phone: </h4>'.$POSTED['phone'].'</p>
    <h4>address: </h4>'.$POSTED['address'].'</p>
    <h4>start: </h4>'.$POSTED['start'].'</p>
    <h4>checkbox: </h4>'.$POSTED['checkbox'].'</p>
    <h4>budget: </h4>'.$POSTED['budget'].'</p>
    <h4>schedule: </h4>'.$POSTED['schedule'].'</p>';
}
elseif ($POSTED['type'] == 'connect') {
    $toEmail = 'info@coramrealty.com';
    $emailSubject = '[BUY REQ]' . $emailSubject;
    $htmlContent = '<h2>Contact Request Submitted</h2>
    <h4>fname: </h4>'.$POSTED['fname'].'</p>
    <h4>lname: </h4>'.$POSTED['lname'].'</p>
    <h4>email: </h4>'.$POSTED['email'].'</p>
    <h4>phone: </h4>'.$POSTED['phone'].'</p>
    <h4>help: </h4>'.$POSTED['help'].'</p>';
}
elseif ($POSTED['type'] == 'sell') {
    $emailSubject = '[SELL REQ]' . $emailSubject;
    $htmlContent = '<h2>Contact Request Submitted</h2>
        <h4>property: </h4>'.$POSTED['property'].'</p>
        <h4>city: </h4>'.$POSTED['city'].'</p>
        <h4>square: </h4>'.$POSTED['square'].'</p>
        <h4>bedroom: </h4>'.$POSTED['bedroom'].'</p>
        <h4>bathroom: </h4>'.$POSTED['bathroom'].'</p>
        <h4>features: </h4>'.$POSTED['features'].'</p>
        <h4>fname: </h4>'.$POSTED['fname'].'</p>
        <h4>lname: </h4>'.$POSTED['lname'].'</p>
        <h4>email: </h4>'.$POSTED['email'].'</p>
        <h4>phone: </h4>'.$POSTED['phone'].'</p>
        <h4>timeframe: </h4>'.$POSTED['timeframe'].'</p>
        <h4>price: </h4>'.$POSTED['price'].'</p>';
}

// Set content-type header for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: '.$POSTED['clientName'].'<' . $POSTED['clientEmail'] .'>'. "\r\n";

// Send email
if(mail($toEmail,$emailSubject,$htmlContent,$headers)){
    $statusMsg = 1;
}else{
    $statusMsg = 0;
}

echo $statusMsg;

?>