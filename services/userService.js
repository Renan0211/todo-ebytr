const model = require('../models/usersModel');

const internalError = {
  err: { message: 'Something went wrong :(' },
  status: 500,
};

const createUser = async (userInfo) => {
  try {
    const newUserInfo = await model.createUser(userInfo);
    return newUserInfo;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
};

const getUserTasks = async (userEmail) => {
  try {
    const userTasks = await model.getUserTasks(userEmail);
    return userTasks;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
};

const insertTask = async (userEmail, newTask) => {
  try {
    const result = await model.insertTask(userEmail, newTask);
    return result;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
};

const updateTask = async (userEmail, oldTask, newTask) => {
  try {
    const result = await model.updateTask(userEmail, oldTask, newTask);
    return result;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
};

const deleteTask = async (userEmail, task) => {
  try {
    const result = await model.deleteTask(userEmail, task);
    return result;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
};

module.exports = {
  createUser,
  getUserTasks,
  insertTask,
  updateTask,
  deleteTask,
};
