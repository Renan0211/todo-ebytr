const { ObjectId } = require('mongodb');
const connnection = require('./connection');

const DB_NAME = 'users-todo-ebyrt';

const createUser = async ({ userName, password }) => {
  const insertedUser = await connnection().then((db) => db.collection(DB_NAME)
    .insertOne({ userName, password, todoList: [] }));
  const insertedId = new ObjectId(insertedUser.insertedId);
  const newUser = await connnection().then((db) => db.collection(DB_NAME)
    .findOne({ _id: insertedId }));
  delete newUser.password;
  return newUser;
};

module.exports = {
  createUser,
};
