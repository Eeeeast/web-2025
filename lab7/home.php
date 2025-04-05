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

$filter = (int) $_GET["id"];
$usersPosts = file_get_contents("posts.json");
$posts = json_decode($usersPosts, true);
?>
<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Основная лента</title>
    </head>
    <body>
        <?php foreach ($posts as $post) {
            if (!$filter | ($post["user-id"] === $filter)) {
                include "post-template.php";
            }
        } ?>
    </body>
</html>
