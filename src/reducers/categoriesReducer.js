import * as types from '../constants/actionTypes';


export default function categories(state = [], action) {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return [...action.payload];
    default:
      return [...state];
  }
}