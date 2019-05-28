import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import CategoryList from '../Category/CategoriesList';
import category from '../../category';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Product from '../Product/Product';
import FilterPrice from './FilterPrice';
import uniqueid from 'uniqid';
import './Product.scss';

class ProductsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: 0,
      itemsPage: 0,
      catId: 0,
      pages:[]
    }
  }
  componentDidMount(){
    this.setItems();
  }
  componentDidUpdate(){
    let {catId} = this.state;
    let {id} = this.props.match.params;
    catId !== 0 ? id !== catId ? this.componentDidMount() : '' : ''  
  }
  setItems(){
   let {id} = this.props.match.params;
   let {items, cart} = this.props;
   let itCategoryProducts = [];
   const arr = [];
    items.map(item => {
    item.category.map(cat => {
    if(cat == id){
    cart.length !== 0 ?
    cart.map(cartId => item.id !== cartId ? item.inCart = false : '') : '';    
    cart.length === 0 ? item.inCart=false : '';
    let singleItem = {...item};
    itCategoryProducts = [...itCategoryProducts, singleItem];
    }})})
    const countPages =  Math.ceil(itCategoryProducts.length / 10)
    for(let i = 1; i <= countPages; i++){
    arr.push(i)
    }
    this.setState({
      items:itCategoryProducts,
      itemsPage: itCategoryProducts,
      pages: arr,
      catId: id
    }) 
  }
  render() {
    let {items, pages, itemsPage} = this.state;
    let {id, page} = this.props.match.params;
    let categoryName = '';
    category.map(cat => cat.id == id ? categoryName = cat.category : '');
    const initPagesList = () => {
     return pages.map(p => {
      return page == p  ? <Link key={uniqueid()} to={`/index.html/products/${id}/page/${p}`}><div className="page-num active">{p}</div></Link>:
      <Link key={uniqueid()} to={`/index.html/products/${id}/page/${p}`}><div className="page-num">{p}</div></Link>
      })
    }
    const search = (min, max) => {
      this.props.history.push(`/index.html/products/${id}/page/1`);
      let arr = [];
      itemsPage.map(item =>  item.price >= min && item.price <= max ? arr.push(item) : '')
      this.setState({
        items: arr
      });
    }
    const meta = {
      title: categoryName,
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
      <React.Fragment>
        <Link to={`/index.html`}><button className="home">Головна</button></Link>
        <div className="sidebar"><CategoryList/>
        <div className="filter-price">{items.length > 0 ? <FilterPrice search={search} products={items}/> : ''}</div>
        </div>
        <div className="product-list">
        <h1>{categoryName}</h1>
      {
        items.length > 0 ?
        items.map((val, index) => {
        if(index < page * 10 && index >= (page - 1) * 10){
          return <Product key={val.id} product={val}/>
        }
      }):  <div><h1>Товарів немає</h1> </div>}
      </div>
      <div className="pages-list">{items.length > 10 ? initPagesList() : ''}</div>
      </React.Fragment>
      </DocumentMeta>
    )
  }
}
const mapStateToProps = state => ({
  items: state.products.items,
  cart: state.cart.cartId
});
export default connect(mapStateToProps, null)(ProductsList)