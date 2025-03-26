<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digit Translator</title>
</head>
<body>
    <div>
        <h1>Digit Translator</h1>
        <form method="post">
            <input type="number" name="digit" placeholder="Enter a digit (0..10)" min="0" max="9" required>
            <button type="submit">Translate</button>
        </form>

        <?php
        function digitToWord($digit)
        {
            $words = [
                0 => "Ноль",
                1 => "Один",
                2 => "Два",
                3 => "Три",
                4 => "Четыре",
                5 => "Пять",
                6 => "Шесть",
                7 => "Семь",
                8 => "Восемь",
                9 => "Девять",
            ];
            return $words[$digit] ?? "Invalid input";
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $digit = intval($_POST["digit"]);

            echo digitToWord($digit);
        }
        ?>
    </div>
</body>
</html>
