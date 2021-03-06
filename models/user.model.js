const db = require("../data/database");
const bcrypt = require("bcryptjs");

class User {
  constructor(email, password, fullname, street, postal, city) {
    this.email = email;
    this.password = password;
    this.name = fullname;
    this.address = {
      street,
      postal,
      city,
    };
  }

  async signup() {
    const hashedPassoword = await bcrypt.hash(this.password, 12);

    await db.getDb().collection("users").insertOne({
      email: this.email,
      password: hashedPassoword,
      name: this.name,
      address: this.address,
    });
  }

  getUserWithSameEmail() {
    return db.getDb().collection("users").findOne({ email: this.email });
  }

  async existsAlready() {
    const existingUser = await this.getUserWithSameEmail();
    if (existingUser) {
      return true;
    }
    return false;
  }

  hasMatchingPassword(hashedPassoword) {
    return bcrypt.compare(this.password, hashedPassoword);
  }
}

module.exports = User;
