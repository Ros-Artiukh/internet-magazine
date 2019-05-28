import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Cart from './Cart';

class CartList extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      total:0
    }
  }
  componentDidMount(){
    this.setItems();
  }
  setItems(){
    const {items, cartId} = this.props;
    let allProducts = [];
    let summ = 0;
    items.map(item => {
      cartId.map(idCart => {
        idCart == item.id ? (allProducts.push(item),
          item.total === 0 ? summ+=item.price : summ+=item.total ) : ''              
      })
    })
    this.setState({
      items: allProducts,
      total: summ
    })
   }
  render() {
    const {items, total} = this.state;
    const refresh = () => {
    this.setState({},this.componentDidMount)  
  }
    const meta = {
      title: `Кошик, до сплати ${total}`,
      description: '',
      canonical: '',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: ''
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
    <div className="cart-list">
    <Link to={`/index.html`}><button className="home">Головна</button></Link>
               {items.map(item => {
                return <Cart refresh={refresh} key={item.id} product={item}/>
               })}            
           {items.length > 0 ? <h3 className="info-cart">Товарів на сумму {total} </h3>:
           <h3 className="info-cart">Товарів немає </h3>} 
    </div>
    </DocumentMeta>
    )
  }
}
const mapStateToProps = state => ({
  items: state.products.items,
  cartId: state.cart.cartId
});
export default connect(mapStateToProps, null)(CartList)