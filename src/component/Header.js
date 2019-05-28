import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './Cart/Cart.scss';
import './Header.scss';

 class Header extends Component {
  render() {
    let {cartId} = this.props
    return (
      <div className="num-cart">
        <div className="cart-box"><div className="cart-items">
        {cartId.length > 0 ? <Link to={`/index.html/cart`}><span>{cartId.length}</span></Link> : ''}</div><i className="fas fa-shopping-cart"/><span>Кошик</span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  cartId: state.cart.cartId
});
export default connect(mapStateToProps, null)(Header)