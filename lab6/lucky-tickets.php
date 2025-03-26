<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lucky Tickets Finder</title>
</head>
<body>
    <div>
        <h1>Lucky Tickets Finder</h1>
        <form method="post">
            <input type="text" name="start" placeholder="Start ticket no. (6 digits)" required pattern="\d{6}">
            <input type="text" name="end" placeholder="End ticket no. (6 digits)" required pattern="\d{6}">
            <button type="submit">Find Lucky Tickets</button>
        </form>

        <?php if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $start = trim($_POST["start"]);
            $end = trim($_POST["end"]);

            if (strlen($start) == 6 && strlen($end) == 6) {
                $startNum = intval($start);
                $endNum = intval($end);

                if ($startNum < $endNum) {
                    echo "Lucky Tickets:<br>";

                    for ($num = $start; $num < $end; $num++) {
                        $ticket = str_pad($num, 6, "0", STR_PAD_LEFT);
                        $firstHalf = substr($ticket, 0, 3);
                        $secondHalf = substr($ticket, 3, 3);
                        $sumFirstHalf = array_sum(str_split($firstHalf));
                        $sumSecondHalf = array_sum(str_split($secondHalf));

                        if ($sumFirstHalf === $sumSecondHalf) {
                            echo $ticket . "<br>";
                        }
                    }
                } else {
                    echo "The range is invalid. The start number must be less than the end number.";
                }
            } else {
                echo "Invalid input. Both numbers must be six-digit integers.";
            }
        } ?>
    </div>
</body>
</html>
