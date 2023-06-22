function logger(req, res, next) {
  const timestamp = new Date().toLocaleString();
  const method = req.method;
  const url = req.originalUrl
  console.log(`[${timestamp} ${method} to ${url}]`)
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}