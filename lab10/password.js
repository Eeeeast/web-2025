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
  return str[Math.floor(Math.random() * str.length)];
}

function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random())
    .join("");
}

console.log(generatePassword(12));
