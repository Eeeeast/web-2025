<?php
$usersData = file_get_contents("users.json");
$users = json_decode($usersData, true);

function findUserById($users, $id)
{
    foreach ($users as $user) {
        if ($user["id"] === $id) {
            return $user;
        }
    }
    return null;
}

$userId = isset($_GET["id"]) ? (int) $_GET["id"] : 1;
$user = findUserById($users, $userId);
$user = $user ? $user : findUserById($users, 1);

$usersPosts = file_get_contents("posts.json");
$posts = json_decode($usersPosts, true);
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
