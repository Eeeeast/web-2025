<?php

$host = "localhost";
$db = "blog";
$user = "root";
$pass = "234156";

$dsn = "mysql:host=$host;dbname=$db";

try {
    $pdo = new PDO($dsn, $user, $pass);
} catch (\PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
