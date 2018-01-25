import { FETCH_USER } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false
    default:
      return state
  }
}
