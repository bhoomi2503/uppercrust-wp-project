<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cart";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the ngo_details table
$sql = "SELECT * FROM orders";
$result = $conn->query($sql);

// Generate JSON-formatted response from the retrieved data
$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Output the JSON-formatted response
header('Content-Type: application/json');
echo json_encode($data);

// Close the database connection
$conn->close();
