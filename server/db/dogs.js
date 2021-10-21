const connection = require('./connection')

module.exports = {
  getDogs,
  addDog,
  updateDog,
  deleteDog
}

function getDogs (db = connection) {
  return db('dogs')
    .select()
}

function addDog (newDog, auth0Id, db = connection) {
  const { breed, name, age, sex, desexed, bio } = newDog
  const addNewDog = {
    breed: breed,
    name: name,
    age: age,
    sex: sex,
    desexed: desexed,
    bio: bio
  }
  return db('dog')
    .insert(addNewDog)
    .then(() => {
      return null
    })
}

function updateDog (dog, db = connection) {
  const { id, breed, name, age, sex, desexed, bio } = dog
  const updatedDog = {
    breed: breed,
    name: name,
    age: age,
    sex: sex,
    desexed: desexed,
    bio: bio
  }
  return db('dogs', updatedDog)
    .where('id', id)
    .update(updatedDog)
    .then(() => {
      return {
        id: id,
        breed: breed,
        name: name,
        age: age,
        sex: sex,
        desexed: desexed,
        bio: bio
      }
    })
}

function deleteDog (userId, id, db = connection) {
  return db('dogs')
    .where('user_Id', userId)
    .where('dogs.id', id)
    .del(id)
}
