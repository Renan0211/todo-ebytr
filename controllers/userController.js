const service = require('../services/userService');

const createNewUser = async (req, res) => {
  const { email, userName, password } = req.body;
  const result = await service.createUser({ email, userName, password });
  if (result.err) {
    const { err, status } = result;
    return res.status(status).json(err);
  }
  return res.status(201).json(result);
};

const getUserTasks = async (req, res) => {
  const { email } = req.body;
  const result = await service.getUserTasks(email);
  if (result.err) {
    const { err, status } = result;
    return res.status(status).json(err);
  }
  return res.status(200).json(result);
};

const insertTask = async (req, res) => {
  const { email, task } = req.body;
  const result = await service.insertTask(email, task);
  if (result.err) {
    const { err, status } = result;
    return res.status(status).json(err);
  }
  return res.status(201).json(result);
};

const updateTask = async (req, res) => {
  const { email, oldTask, newTask } = req.body;
  const result = await service.updateTask(email, oldTask, newTask);
  if (result.err) {
    const { err, status } = result;
    return res.status(status).json(err);
  }
  return res.status(204).json(result);
};

const deleteTask = async (req, res) => {
  const { email, task } = req.body;
  const result = await service.deleteTask(email, task);
  if (result.err) {
    const { err, status } = result;
    return res.status(status).json(err);
  }
  return res.status(204).json(result);
};

module.exports = {
  createNewUser,
  getUserTasks,
  insertTask,
  updateTask,
  deleteTask,
};
