// A API deve permitir a criação de novos usuários no banco de dados
// ela deve receber e armazenar os seguintes dados: userName, e password
// e deve inserir junto na tabela um todo-list (um array de tarefas, a princípio vazio)
// ao criar um novo usuário o model deve responder com um payload com
// a informação do usuário sem a senha

const { expect } = require('chai');

const usersModel = require('../../../models/usersModel');

describe('insert a new User', () => {
  const userPayload = {
    email: 'talMikhail@chess.com',
    userName: 'MikeT',
    password: 'the mage from riga',
  };

  describe('when it is successfull', () => {
    it('returns a object', async () => {
      const response = await usersModel.createUser(userPayload);
      expect(response).to.be.a('object');
    });
    it('should not have the user password', async () => {
      const response = await usersModel.createUser(userPayload);
      expect(response).to.not.have.a.property('password');
    });
    it('should have the username', async () => {
      const response = await usersModel.createUser(userPayload);
      expect(response).to.have.a.property('userName');
    });
  });
});
