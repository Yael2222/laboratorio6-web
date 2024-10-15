const {get} = require ("../models/user.model.js");


const getAllPeople = () => {
  const users = get();
  return users;
};


module.exports = {
    getAllPeople
}
