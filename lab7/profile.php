<?php
include "user-utils.php";

$userId = (int) $_GET["id"] ?? 1;
$user = findUserById($userId);
$user = $user ? $user : findUserById(1);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $user["name"] ?></title>
</head>
<body>
    <div>
        <div>
            <img src="<?= $user["ava"]["src"] ?>" alt="<?= $user["ava"][
    "alt"
] ?>" width="30" />
            <h1><?= $user["name"] ?></h1>
        </div>
        <div>
            <p><?= $user["about"] ?></p>
            <p>🖼<?= $user["posts"] ?> поста</p>
        </div>
        <div>
            <?php foreach ($posts as $post) {
                if ($post["user-id"] == $userId) {
                    echo '<img src="' .
                        $post["image"] .
                        '" alt="Post" width="200" />';
                }
            } ?>
        </div>
    </div>
</body>
</html>
