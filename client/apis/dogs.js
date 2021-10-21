import request from 'superagent'

const rootUrl = '/api/v1'

export function getDogs (id) {
  return request.get(rootUrl + '/dogs/' + id)
    .then(res => {
      return res.body
    })
    .catch((err) => {
      console.log(err, 'Cannot get dogs')
    })
}

export function addDogs (newDog) {
  return request.post(rootUrl + '/dogs/')
    .send(newDog)
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
