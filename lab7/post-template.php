<div>
    <div>
        <img src="<?= findUserById($users, $post["user-id"])["ava"][
            "src"
        ] ?>" alt="User Avatar" width="30" />
    </div>
    <div>
        <img src="<?= $post["image"] ?>"alt="post image" width="300" />
        <div>
            <button type="button">❤️<?= $post["like-count"] ?></button>
        </div>
        <p><?= $post["text"] ?></p>
        <p><?= date("d-m-Y", $post["time"]) ?></p>
    </div>
</div>
