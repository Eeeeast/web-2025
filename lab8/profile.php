<?php
include "user-utils.php";

$userId = (int) ($_GET["id"] ?? 1);

$user = findUserById($userId);

if (!$user) {
    header("Location: home.php");
    exit();
}

$posts = getUserPosts($userId);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($user["name"]) ?></title>
</head>
<body>
    <div>
        <div>
            <img src="images/<?= $user["src"] ?>" alt="<?= $user[
    "alt"
] ?>" width="30" />
            <h1><?= htmlspecialchars($user["name"]) ?></h1>
        </div>
        <div>
            <p><?= htmlspecialchars($user["about"]) ?></p>
            <p>🖼<?= count($posts) ?> поста</p>
        </div>
        <div>
            <?php foreach ($posts as $image): ?>
                <img src="images/<?= htmlspecialchars(
                    $image
                ) ?>" width="200" alt="Post">
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>
