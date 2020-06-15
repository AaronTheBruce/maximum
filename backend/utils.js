const { check, validationResult } = require("express-validator");

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => error.msg);

    const err = Error("Bad request.");
    err.status = 400;
    err.title = "Bad request.";
    err.errors = errors;
    return next(err);
  }
  next();
};
const validateUserInfo = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your name"),
];
const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password"),
];

module.exports = {
  asyncHandler,
  handleValidationErrors,
  validateUserInfo,
  validateEmailAndPassword,
};