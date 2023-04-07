<?php
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "cart";

$conn = mysqli_connect($server_name, $username, $password, $database_name);
//now check the connection
if (!$conn) {
    die("Connection Failed:" . mysqli_connect_error());
}

if (isset($_POST['save'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['pass'];
    $mobile = $_POST['mobile'];
    $country = $_POST['country'];
    $address = $_POST['address'];


    $sql_query = "INSERT INTO orders (name,email,password,mobile,country,address)
	 VALUES ('$name','$email','$password','$mobile','$country','$address')";

    if (mysqli_query($conn, $sql_query)) {
        echo "New Details Entry inserted successfully !";
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
