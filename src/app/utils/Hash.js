import bcrypt from "bcryptjs";
class Hash {
  static make = async (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });
  };

  static check = async (password, hash) => {
    return await bcrypt.compare(password, hash);
  };
}

export default Hash;
