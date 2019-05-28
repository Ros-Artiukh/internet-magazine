import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import CategoryList from '../Category/CategoriesList';
import './Product.scss';
import {initialProducts, addCart} from '../../actions/magazineActions';
import { connect } from 'react-redux';
class Details extends Component {
  render() {
    let {items, match, cartId} = this.props;
    let product;
    items.map(item => (item.id == match.params.id ? product = item : false,
          cartId.map(cartNum => cartNum == item.id ? item.inCart = true : '')))
        cartId.length === 0 ? product.inCart = false : '';
    const setCart = () => {
    this.props.addCart(product.id);
    }
    const meta = {
      title: product.title,
      description: '',
      canonical: '',
      meta: {
        charset: '',
        name: {
          keywords: ''
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
      <React.Fragment>
      <div className="detail-product">
      <CategoryList/>
      <div className="container-product">
      <div className="image-product"><img src={product.img} alt=""/></div>
      <div className="sidebar-product">
      <div className="title">
      <div className="name-product"><h3>{product.title}</h3></div>
      <div className="price-product">{product.price}</div>
      { product.inCart ? <button className="buy-product">В кошику</button>
      : <button onClick={setCart} className="buy-product">Купити<i className="fas fa-shopping-cart"/></button> }
      </div>
      <div className="details-settings-product">{product.info}</div>
      </div>
      </div>
      </div>
      </React.Fragment>
      </DocumentMeta>
    )
  }
}
const mapStateToProps = state => ({
  items: state.products.items,
  cartId: state.cart.cartId
});
export default connect(mapStateToProps, { initialProducts, addCart })(Details)