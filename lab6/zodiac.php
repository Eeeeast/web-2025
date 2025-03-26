<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zodiac Sign Finder</title>
</head>
<body>
    <div>
        <h1>Zodiac Sign Finder</h1>
        <form method="post">
            <input type="text" name="date" placeholder="Enter date (DD.MM.YYYY)" required>
            <button type="submit">Find Zodiac Sign</button>
        </form>

        <?php if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $date = trim($_POST["date"]);

            $normalizedDate = str_replace(["/", "\\"], ".", $date);

            $parts = explode(".", $normalizedDate);

            if (count($parts) === 3) {
                $day = intval($parts[0]);
                $month = intval($parts[1]);

                if ($day >= 1 && $day <= 31 && $month >= 1 && $month <= 12) {
                    function getZodiacSign($day, $month)
                    {
                        if (
                            ($month == 3 && $day >= 21) ||
                            ($month == 4 && $day <= 19)
                        ) {
                            return "Овен";
                        } elseif (
                            ($month == 4 && $day >= 20) ||
                            ($month == 5 && $day <= 20)
                        ) {
                            return "Телец";
                        } elseif (
                            ($month == 5 && $day >= 21) ||
                            ($month == 6 && $day <= 20)
                        ) {
                            return "Близнецы";
                        } elseif (
                            ($month == 6 && $day >= 21) ||
                            ($month == 7 && $day <= 22)
                        ) {
                            return "Рак";
                        } elseif (
                            ($month == 7 && $day >= 23) ||
                            ($month == 8 && $day <= 22)
                        ) {
                            return "Лев";
                        } elseif (
                            ($month == 8 && $day >= 23) ||
                            ($month == 9 && $day <= 22)
                        ) {
                            return "Дева";
                        } elseif (
                            ($month == 9 && $day >= 23) ||
                            ($month == 10 && $day <= 22)
                        ) {
                            return "Весы";
                        } elseif (
                            ($month == 10 && $day >= 23) ||
                            ($month == 11 && $day <= 21)
                        ) {
                            return "Скорпион";
                        } elseif (
                            ($month == 11 && $day >= 22) ||
                            ($month == 12 && $day <= 21)
                        ) {
                            return "Стрелец";
                        } elseif (
                            ($month == 12 && $day >= 22) ||
                            ($month == 1 && $day <= 19)
                        ) {
                            return "Козерог";
                        } elseif (
                            ($month == 1 && $day >= 20) ||
                            ($month == 2 && $day <= 18)
                        ) {
                            return "Водолей";
                        } elseif (
                            ($month == 2 && $day >= 19) ||
                            ($month == 3 && $day <= 20)
                        ) {
                            return "Рыбы";
                        } else {
                            return "Invalid input";
                        }
                    }

                    echo getZodiacSign($day, $month);
                } else {
                    echo "Invalid date. Day must be between 1..32, month between 1..13.";
                }
            } else {
                echo "Invalid format. Use DD.MM.YYYY.";
            }
        } ?>
    </div>
</body>
</html>
