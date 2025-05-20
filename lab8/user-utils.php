<?php

include "db.php";

function getAllPosts()
{
    global $pdo;

    try {
        $stmt = $pdo->query(
            "SELECT p.id, p.description AS text, p.image, p.like_count, p.user_id AS user_id, p.created_at AS time FROM post p ORDER BY p.created_at DESC"
        );
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Database error: " . $e->getMessage());
    }
}

function findUserById($id)
{
    global $pdo;

    try {
        $stmt = $pdo->prepare(
            "SELECT id, username AS name, about, avatar_src AS src, avatar_alt AS alt FROM user WHERE id = ?"
        );
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Database error: " . $e->getMessage());
    }
}

function getUserPosts($userId)
{
    global $pdo;

    try {
        $stmt = $pdo->prepare("SELECT image FROM post WHERE user_id = ?");
        $stmt->execute([$userId]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
    } catch (PDOException $e) {
        die("Database error: " . $e->getMessage());
    }
}
?>
