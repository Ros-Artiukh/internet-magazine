import { combineReducers } from 'redux';
import subCategoryReducer from './subCategoryReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  subCategory: subCategoryReducer
});