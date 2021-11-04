const { ObjectId } = require('mongodb');
const connnection = require('./connection');

const DB_NAME = 'users';

const getUserById = async (id) => {
  const comparisonId = new ObjectId(id);
  const user = await connnection().then((db) => db.collection(DB_NAME)
    .findOne({ _id: comparisonId }));
  return user;
};

const createUser = async ({ userName, password, email }) => {
  const insertedUser = await connnection().then((db) => db.collection(DB_NAME)
    .insertOne({
      userName, password, email, todoList: [],
    }));
  const newUser = await getUserById(insertedUser.insertedId);
  delete newUser.password;
  return newUser;
};

module.exports = {
  createUser,
};
