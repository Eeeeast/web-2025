<?php
$users = json_decode(file_get_contents("users.json"), true);
$posts = json_decode(file_get_contents("posts.json"), true);

function findUserById($id)
{
    global $users;
    foreach ($users as $user) {
        if ($user["id"] === $id) {
            return $user;
        }
    }
    return null;
}

$filter = (int) $_GET["id"];
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
