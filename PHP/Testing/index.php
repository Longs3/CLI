<!-- <?php 
// open connection
$servername = 'localhost';
$username = 'root';
$pwd = '';
$dbname = 'for_devlop';

// create connection

$con = new mysqli($servername, $username, $pwd, $dbname);

if ($con->connect_error) {
die("connection failed".$con->connect_error);
} else {
// success
}
// getting data
$id = $_POST['id'];
$food_name = $_POST['food_name'];
$number_of_food = $_POST["number_of_food"];


$sql = "INSERT INTO 'food' () VALUES ($id, $food_name, $number_of_food)"; 




?> -->