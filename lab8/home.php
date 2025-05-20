<?php
include "user-utils.php";

$filter = isset($_GET["id"]) ? (int) $_GET["id"] : null;

try {
    $posts = getAllPosts();
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
        <?php if (!$filter || $post["user_id"] === $filter): ?>
            <?php include "post-template.php"; ?>
        <?php endif; ?>
    <?php endforeach; ?>
</body>
</html>
