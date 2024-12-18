import Hash from "../utils/Hash.js";
import Token from "../utils/Token.js";

class FeaturesController {
  static TokenEncode = async (req, res) => {
    const token = Token.encode("aohinuzzaman420@gmail.com", "15");
    res.send(token);
  };
  static TokenDecode = async (req, res) => {
    const token = Token.decode(req.body.token);
    res.send(token);
  };
  static HashPassword = async (req, res) => {
    const hash = await Hash.make(req.body.password);
    res.json({ hash: hash });
  };
  static CheckPassword = async (req, res) => {
    const hash = await Hash.check(req.body.password, req.body.hash);
    res.json({ hash: hash });
  };
}
export default FeaturesController;
