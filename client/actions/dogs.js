import { getDogs } from '../apis/dogs'

export const GET_ALL_DOGS = 'GET_ALL_DOGS'

export function setAllDogs (dogs) {
  return {
    type: GET_ALL_DOGS,
    dogs: dogs
  }
}

export function fetchAllDogs () {
  return dispatch => {
    return getDogs()
      .then(dogs => {
        dispatch(setAllDogs(dogs))
        return null
      })
  }
}
