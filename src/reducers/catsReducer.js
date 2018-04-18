import * as types from '../constants/actionTypes';


export default function cats(state = [], action) {
  switch (action.type) {
    case types.GET:
      return [...action.payload];
    default:
      return [...state];
  }
}
