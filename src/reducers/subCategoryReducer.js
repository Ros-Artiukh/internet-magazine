import {SETID, SUBID, CLEANCAT} from '../actions/types';

export const initialState = {
  id: [],
  sub: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case SETID:
      return {
        ...state,
        id:  action.payload
      };
      case SUBID:
      return {
        ...state,
        sub:  action.payload
      };
      case CLEANCAT:
      return {
        ...state,
        id:  action.payload
      };
    default:
      return state;
  }
}