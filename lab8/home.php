<?php
include "user-utils.php";

$filter = isset($_GET["id"]) ? (int) $_GET["id"] : null;

try {
    $posts = getAllPosts($filter);
} catch (Exception $e) {
    die("Error fetching posts: " . $e->getMessage());
}
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <title>Главная</title>
</head>
<body>
    <?php foreach ($posts as $post): ?>
        <?php include "post-template.php"; ?>
    <?php endforeach; ?>
</body>
</html>
