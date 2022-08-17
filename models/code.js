const mongoose = require("mongoose");
const Joi = require("joi");
const { codeTypeEnum, codeSecurity } = require("../utils/enum");

module.exports.codeFields = [
  "title",
  "code",
  "codeType",
  "tags",
  "security",
  "owner",
];

const codeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 75,
  },
  code: {
    type: String,
    minLength: 2,
    required: true,
  },
  codeType: {
    type: String,
    enum: codeTypeEnum,
    required: true,
    default: codeTypeEnum[0],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: [String],
  security: {
    type: String,
    required: true,
    enum: codeSecurity,
    default: codeSecurity[0],
  },
});

const Code = mongoose.model("Code", codeSchema);

const validateCode = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(2).max(75),
    code: Joi.string().required().min(2),
    codeType: Joi.string()
      .required()
      .valid(...codeTypeEnum),
    owner: Joi.string().required(),
    tags: Joi.array().items(Joi.string()),
    security: Joi.string()
      .required()
      .valid(...codeSecurity),
  });
  return schema.validate(data);
};

module.exports.Code = Code;
module.exports.validateCode = validateCode;
