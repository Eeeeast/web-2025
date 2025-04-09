<?php
include "user-utils.php";

$filter = isset($_GET["id"]) ? (int) $_GET["id"] : null;
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
