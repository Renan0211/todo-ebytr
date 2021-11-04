const { ObjectId } = require('mongodb');
const connection = require('./connection');

const DB_NAME = 'users';

const getUserById = async (id) => {
  const comparisonId = new ObjectId(id);
  const user = await connection().then((db) => db.collection(DB_NAME)
    .findOne({ _id: comparisonId }));
  return user;
};

const getUserByEmail = async (email) => {
  const user = await connection().then((db) => db.collection(DB_NAME)
    .findOne({ email }));
  return user;
};

const createUser = async ({ userName, password, email }) => {
  const insertedUser = await connection().then((db) => db.collection(DB_NAME)
    .insertOne({
      userName, password, email, taskList: [],
    }));
  const newUser = await getUserById(insertedUser.insertedId);
  delete newUser.password;
  return newUser;
};

const getUserTasks = async (email) => {
  const userInfo = await getUserByEmail(email);
  const userTasks = userInfo.taskList;
  return userTasks;
};

const insertTask = async (email, task) => {
  const result = await connection().then((db) => db.collection(DB_NAME)
    .updateOne({ email }, { $push: { taskList: task } }));
  return result;
};

const updateTask = async (email, oldTask, newTask) => {
  const result = await connection().then((db) => db.collection(DB_NAME)
    .updateOne({ email, taskList: oldTask }, { $set: { 'taskList.$': newTask } }));
  return result;
};

module.exports = {
  createUser,
  getUserTasks,
  insertTask,
  updateTask,
};
