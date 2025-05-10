function isPrimeNumber(input) {
  if (typeof input === "number") {
    console.log(
      `${input} ${isPrime(input) ? "простое число" : "не простое число"}`,
    );
  } else if (Array.isArray(input)) {
    let primes = [];
    let notPrimes = [];
    for (let item of input) {
      if (typeof item !== "number" || isNaN(item)) {
        console.error(`Ошибка: ${item} не число`);
        return;
      }
      isPrime(item) ? primes.push(item) : notPrimes.push(item);
    }
    let result = "";
    if (primes.length === 1) {
      result += `${primes} простое число`;
    } else if (primes.length > 1) {
      result += `${primes.join(", ")} простые числа`;
    }
    if (primes.length && notPrimes.length) {
      result += ", ";
    }
    if (notPrimes.length === 1) {
      result += `${notPrimes} не простое число`;
    } else if (notPrimes.length > 1) {
      result += `${notPrimes.join(", ")} не простые числа`;
    }
    console.log(result);
  } else {
    console.error(
      "Ошибка: переданный параметр должен быть числом или массивом чисел",
    );
  }
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}

isPrimeNumber(3); // Результат: 3 простое число
isPrimeNumber(4); // Результат: 4 не простое число
isPrimeNumber([3, 4, 5]); // Результат: 3, 5 простые числа, 4 не простое число
