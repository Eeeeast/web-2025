<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leap Year Checker</title>
</head>
<body>
    <div>
        <h1>Leap Year Checker</h1>
        <form method="post">
            <input type="number" name="year" placeholder="Enter a year" required>
            <button type="submit">Check</button>
        </form>

        <?php if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $year = intval($_POST["year"]);

            if ($year < 1 || $year > 9999) {
                echo "Out of range";
            } elseif (
                $year % 4 == 0 &&
                ($year % 100 != 0 || $year % 400 == 0)
            ) {
                echo "Leap year";
            } else {
                echo "Not a leap year";
            }
        } ?>
    </div>
</body>
</html>
