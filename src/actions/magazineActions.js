import {SETID, SUBID, CLEANCAT, INITIALPRODUCTS, ADDCART, INCREMENT, DECREMENT, DELETECARTID} from './types';

export const setId = id => dispatch => {
  dispatch({
    type: SETID,
    payload: id
  })
}
export const subId = id => dispatch => {
  dispatch({
    type: SUBID,
    payload: id
  })
}
export const cleanCat = () => dispatch => {
  dispatch({
    type: CLEANCAT,
    payload: []
  })
}
export const initialProducts = products => dispatch => {
  dispatch({
    type: INITIALPRODUCTS,
    payload: products
  })
}
export const addCart = id => dispatch => {
  dispatch({
    type: ADDCART,
    payload: id
  })
}
export const increment = id => dispatch => {
  dispatch({
    type: INCREMENT,
    payload: id
  })
}

export const decrement = id => dispatch => {
  dispatch({
    type: DECREMENT,
    payload: id
  })
}
export const deleteCartId = id => dispatch => {
  dispatch({
    type: DELETECARTID,
    payload: id
  })
}



