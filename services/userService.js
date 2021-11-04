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

module.exports = {
  createUser,
  getUserTasks,
};
