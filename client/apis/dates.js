import request from 'superagent'

const rootUrl = '/api/v1'

export function getDates (id) {
  return request.get(rootUrl + '/dates/')
    .then(res => {
      return res.body.dates
    })
    .catch((err) => {
      console.log(err, 'Cannot get dates')
    })
}

export function addDates (newDate) {
  return request.post(rootUrl + '/dates/')
    .send(newDate)
    .then(res => {
      return res.body.dates
    })
    .catch((err) => {
      console.log(err, 'Cannot add dates')
    })
}
