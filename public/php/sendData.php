<?php
header("Access-Control-Allow-Origin: *");

$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $POSTED = $obj;
}

require_once('pw.php');

$ta = $POSTED['action'];
$tl = $POSTED['label'];
$tv = $POSTED['value'];

// connect
$conn = mysqli_connect($servername, $username, $password, $dbname);
$query = "INSERT INTO Statistics (taction, tlabel, tvalue) VALUES ($ta,$tl,$tv)";

// data inserted!
$data = mysqli_query($conn, $query);

// Send results
if($data){
    $statusMsg = 1;
}else{
    $statusMsg = 0;
}

echo $statusMsg;

?>