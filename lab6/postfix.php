<!DOCTYPE html>
<html>
<head>
    <title>Обратная польская запись</title>
</head>
<body>
    <div class="container">
        <h2>Калькулятор обратной польской записи</h2>
        <form method="GET">
            <input type="text" name="expression" placeholder="Введите выражение" required>
            <button type="submit">Вычислить</button>
        </form>

        <?php if ($_SERVER["REQUEST_METHOD"] === "GET") {
            $input = trim($_GET["expression"]);
            $tokens = explode(" ", $input);
            $stack = [];
            $error = null;

            foreach ($tokens as $token) {
                if ($token === "") {
                    continue;
                }

                if (is_numeric($token)) {
                    array_push($stack, (int) $token);
                } else {
                    if (count($stack) < 2) {
                        $error = "Ошибка: недостаточно операндов для операции '$token'";
                        break;
                    }
                    $b = array_pop($stack);
                    $a = array_pop($stack);
                    switch ($token) {
                        case "+":
                            $res = $a + $b;
                            break;
                        case "-":
                            $res = $a - $b;
                            break;
                        case "*":
                            $res = $a * $b;
                            break;
                        default:
                            $error = "Ошибка: неизвестный оператор '$token'";
                            break 2;
                    }
                    array_push($stack, $res);
                }
            }

            echo "<div>";
            if ($error) {
                echo "<div>" . $error . "</div>";
            } elseif (count($stack) !== 1) {
                echo "<div>Некорректное выражение</div>";
            } else {
                echo "Результат: " . $stack[0];
            }
            echo "</div>";
        } ?>
    </div>
</body>
</html>
