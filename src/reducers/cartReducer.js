import {ADDCART, DELETECARTID} from '../actions/types';

export const initialState = {
  cartId: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case ADDCART:
      const arr = [...state.cartId]
      arr.push(action.payload)
      return {
        ...state,
        cartId: arr
      };
      case DELETECARTID:
      const arrDel = [...state.cartId];
      const inx = arrDel.indexOf(action.payload);
      arrDel.splice(inx, 1);
      return {
        ...state,
        cartId: arrDel
          };
    default:
      return state;
  }
}