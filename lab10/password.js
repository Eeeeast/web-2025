function generatePassword(length = 12) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const all = lower + upper + digits + symbols;

  let password = "";
  password += getRandomChar(lower);
  password += getRandomChar(upper);
  password += getRandomChar(digits);
  password += getRandomChar(symbols);

  for (let i = password.length; i < length; i++) {
    password += getRandomChar(all);
  }

  return shuffleString(password);
}

function getRandomChar(str) {
  return str[~~(Math.random() * str.length)];
}

function shuffleString(str) {
  var a = [...str],
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

console.log(generatePassword(12));
