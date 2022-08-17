const { resData } = require("../../utils/functions");
const _ = require("lodash");
const { default: mongoose } = require("mongoose");
const { validateCode, Code, codeFields } = require("../../models/code");

const addCode = async (req, res) => {
  const { error } = validateCode(req.body);

  if (error)
    return res.status(400).send(resData.error(error.details[0].message));

  const newCode = _.pick(req.body, codeFields);
  // newCode.ownerId = req.user._id;

  let code = new Code(newCode);
  code = await code.save();

  res.status(201).send(resData.success(code));
};

const updateCode = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(resData.error("Something went wrong"));
  }

  if (_.isEmpty(_.pick(req.body, codeFields)))
    return res.status(400).send(resData.error("No data to update"));

  const result = await Code.updateOne(
    { _id: id, owner: req.user._id },
    {
      ..._.pick(req.body, codeFields),
    }
  );

  if (result.matchedCount === 0) {
    return res.status(400).send(resData.error("Code not found"));
  }
  const code = await Code.findById(id);
  res.status(200).send(resData.success(code));
};

const deleteCode = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(resData.error("Something went wrong"));
  }

  const result = await Code.deleteOne({ _id: id, owner: req.user._id });
  if (result.deletedCount === 0) {
    return res.status(400).send(resData.error("Code not found"));
  }
  res.status(200).send(resData.success());
};

const getCode = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(resData.error("Something went wrong"));
  }

  const result = await Code.find({ _id: id, owner: req.user._id });

  if (!result[0]) {
    return res.status(404).send(resData.error("Code not found"));
  }

  res.status(200).send(resData.success(result[0]));
};

module.exports = {
  addCode,
  updateCode,
  getCode,
  deleteCode,
};
