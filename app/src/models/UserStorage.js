"use strict"

class UserStorage {
  static #users = {
    id: ["csongin", "천코딩", "ccoding"],
    psword: ["1234", "12345", "123456"],
    name: ["천송인", "천코딩", "ccoding"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;