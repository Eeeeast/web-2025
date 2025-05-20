<?php
global $pdo;

$stmt = $pdo->prepare("SELECT avatar_src FROM user WHERE id = ?");
$stmt->execute([$post["user_id"]]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<div style="margin-bottom:20px;">
    <img src="<?= htmlspecialchars(
        $user["avatar_src"]
    ) ?>" width="30" alt="Avatar">
    <br>
    <img src="<?= htmlspecialchars(
        $post["image"]
    ) ?>" width="300" alt="Post Image">
    <p><button>❤️ <?= (int) $post["like_count"] ?></button></p>
    <pre><?= htmlspecialchars($post["text"]) ?></pre>
    <small><?= date("Y/m/d", strtotime($post["time"])) ?></small>
</div>
