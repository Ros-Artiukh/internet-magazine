import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {addCart} from '../../actions/magazineActions';


  class Product extends Component {
  render() {
      let {id,title, price, img, info, inCart} = this.props.product;
      let {cartId} = this.props;
          cartId.map(cartNum => cartNum == id ? inCart = true : '')
      const setCart = () => {
        this.props.addCart(id);
      }
    return (
      <div className="product-item">
      <div className="product-container">
      <div className="image-product"><Link to={`/index.html/detail/${id}`}><img src={img} alt=""/></Link></div>
      <div className="title">
      <div className="name-product"><Link to={`/index.html/detail/${id}`}>{title}</Link></div>
      <div className="price-product">{price}</div>
     { inCart ? <button className="buy-product">В кошику</button>
      : <button onClick={setCart} className="buy-product">Купити<i className="fas fa-shopping-cart"/></button> }
      </div>
      </div>
      <div className="info-product">{info}</div>
      </div>
        )
    }
}
const mapStateToProps = state => ({
  cartId: state.cart.cartId
});
export default connect(mapStateToProps, { addCart })(Product)
