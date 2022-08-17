const { User, validate } = require("../../models/user");
const _ = require("lodash");
const { generateHash } = require("../../utils/hash");
const { resData } = require("../../utils/functions");

// categories

const createUser = async (req, res) => {
  const { error } = validate(req.body);

  if (error)
    return res.status(400).send(resData.error(error.details[0].message));

  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send(resData.error("User already exists"));

  user = new User(
    _.pick(req.body, ["username", "email", "password", "fullName"])
  );
  user.password = await generateHash(user.password);

  await user.save();
  res.send(resData.success());
};

module.exports = createUser;
