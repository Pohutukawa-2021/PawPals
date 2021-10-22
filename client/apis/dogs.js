import request from 'superagent'

const rootUrl = '/api/v1'

export function getDogs () {
  return request.get(rootUrl + '/dogs/')
    .then(res => {
      return res.body
    })
    .catch((err) => {
      console.log(err, 'Cannot get dogs')
    })
}

export function addDogs (newDog, id) {
  const item = {
    newDog,
    id
  }
  return request.post(rootUrl + '/dogs/')
    .send(item)
    .then(res => {
      return res.body
    })
    .catch((err) => {
      console.log(err, 'Cannot add dog')
    })
}

export function updateDog (dogDetails) {
  return request.patch(rootUrl + '/dogs/update')
    .send(dogDetails)
    .then(res => {
      return res.body
    })
    .catch((err) => {
      console.log(err, 'Cannot update dog')
    })
}

export function deleteDog (id) {
  return request.delete(rootUrl + '/dogs/')
    .send({ id })
    .then(res => {
      console.log('Dog successfully deleted')
      return null
    })
    .catch((err) => {
      console.log(err, 'Cannot delete dog')
    })
}
