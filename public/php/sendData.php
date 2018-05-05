<?php
header("Access-Control-Allow-Origin: *");

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $POSTED = $obj;
}

function clean($string) {
    $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
    return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
}

$ta = clean($POSTED['action']);
$tl = clean($POSTED['label']);
$tv = clean($POSTED['value']);

// client IPaddress
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}
// convert
$tip = ip2long($ip);

require_once('./pw.php');

// connect
$mysqli_conn = new mysqli("localhost", $username, $password, $dbname);
$query = "INSERT INTO Statistics (taction, tlabel, tvalue, tip) VALUES ('$ta','$tl','$tv','$tip')";

$result = $mysqli_conn->query($query);

// Send results
if($result){
    $statusMsg = 1;
}else{
    $statusMsg = 0;
}

echo $statusMsg;


?>