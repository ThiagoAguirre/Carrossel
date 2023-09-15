// validação com  expressoes regulares
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
