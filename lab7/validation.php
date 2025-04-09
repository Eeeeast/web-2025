<?php
function validateUser($user)
{
    return isset(
        $user["id"],
        $user["name"],
        $user["about"],
        $user["posts"],
        $user["ava"],
        $user["ava"]["src"],
        $user["ava"]["alt"]
    ) &&
        is_int($user["id"]) &&
        is_string($user["name"]) &&
        is_string($user["about"]) &&
        is_int($user["posts"]) &&
        is_string($user["ava"]["src"]) &&
        is_string($user["ava"]["alt"]);
}

function validatePost($post)
{
    return isset(
        $post["user-id"],
        $post["image"],
        $post["like-count"],
        $post["text"],
        $post["time"]
    ) &&
        is_int($post["user-id"]) &&
        is_string($post["image"]) &&
        is_int($post["like-count"]) &&
        is_string($post["text"]) &&
        is_int($post["time"]);
}
?>
