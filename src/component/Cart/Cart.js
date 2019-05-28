import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {increment, decrement, deleteCartId} from '../../actions/magazineActions';
class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
      let {id, title, img, price, count, total} = this.props.product;
      total = price * count;
      let {items, increment, decrement, refresh, deleteCartId} = this.props;
      items.map(item => item.id == id ? item.total = total : '')
      const countPlus = () => {
        refresh();
        increment(id);
        this.setState({})       
      }
      const countMinus = () => {
        refresh();
        decrement(id);
        this.setState({})   
      }
      const deleteProduct = () => {
        refresh();
        deleteCartId(id);
      }
    return (
      <React.Fragment>
        <div className="cart-item">
        <div className="cart-info">
        <span className="times-close" onClick={deleteProduct}>&times;</span>
        <div className="cart-image">
        <img src={img} alt=""/></div>
        <div className="cart-title"><Link to={`/index.html/detail/${id}`}>{title}</Link></div>
        <div className="cart-price"><span>{price}</span></div>
        </div>
        <div className="cart-count"><div className="cart-amount">
        <span onClick={countMinus} className="minus">-</span>
        <div className="count-cart" type="text">{count}</div>
        <span onClick={countPlus} className="plus">+</span>
        </div></div>
        <div className="cart-total">Сумма <span className="total-product">{total}</span></div>
        </div>
        </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  items: state.products.items
});
export default connect(mapStateToProps, {increment, decrement, deleteCartId})(Cart)