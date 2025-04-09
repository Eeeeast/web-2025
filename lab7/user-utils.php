<?php
$users = json_decode(file_get_contents("users.json"), true);
$posts = json_decode(file_get_contents("posts.json"), true);

require "validation.php";

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
?>
