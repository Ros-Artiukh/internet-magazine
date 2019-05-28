import {INITIALPRODUCTS, INCREMENT, DECREMENT, SETCOUNT} from '../actions/types';

export const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case INITIALPRODUCTS:
      return {
        ...state,
        items:  action.payload
      };
      case INCREMENT:
      state.items.map(item => {
        if(item.id == action.payload){
          item.count++;
          item.total = item.price * item.count
        }
      })
      return {
        ...state,
        items: state.items
      };
      case DECREMENT:
      state.items.map(item => {
        if(item.id == action.payload && item.count > 1){
          item.count--;
          item.total = item.price * item.count
        }
      })
      return {
        ...state,
        items: state.items
      };
      case SETCOUNT:
      state.items.map(item => {
        if(item.id == action.payload){
          item.count = action.mean
        }
      })
      return {
        ...state,
        items: state.items
      };
    default:
      return state;
  }
}