const service = require('../services/userService');

const createNewUser = async (req, res) => {
  const { email, userName, password } = req.body;
  const result = service.createUser({ email, userName, password });
  if (result.err) {
    const { err, status } = result;
    return res.status(status).json(err);
  }
  return res.status(201).json(result);
};

module.exports = {
  createNewUser,
};
