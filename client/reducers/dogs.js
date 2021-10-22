import { GET_ALL_DOGS } from '../actions/dogs'

const initialDogs = []

function dogs (state = initialDogs, action) {
  switch (action.type) {
    case GET_ALL_DOGS:
      return action.dogs

    default:
      return state
  }
}

export default dogs
