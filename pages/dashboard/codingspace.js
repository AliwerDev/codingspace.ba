const { Code } = require("../../models/code");
const { codeTypeEnum } = require("../../utils/enum");
const { resData } = require("../../utils/functions");

// get all codes
const getCodes = async (req, res) => {
  const result = await Code.find({ owner: req.user._id });

  if (!result) {
    return res.status(404).send(resData.error("Codes not found"));
  }

  res.status(200).send(resData.success(result));
};

const getCodeTypes = (req, res) => {
  if (!req.user._id) res.status(403).send(resData.error("Not authorized"));
  res.send(resData.success(codeTypeEnum));
};

module.exports = {
  getCodes,
  getCodeTypes,
};
