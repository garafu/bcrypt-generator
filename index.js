const bcrypt = require("bcrypt");
const rounds = 10;
const minor = "b";
const password = "Passw0rd";

(async () => {
  var salt = await bcrypt.genSalt(rounds, minor);
  var hash = await bcrypt.hash(password, salt);
  console.log(hash);
})();