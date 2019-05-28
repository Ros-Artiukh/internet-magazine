import React, { Component } from 'react'
import DocumentMeta from 'react-document-meta';
import CategoriesList from './Category/CategoriesList';
import products from '../product';
import Product from '../component/Product/Product'
import {initialProducts} from '../actions/magazineActions';
import { connect } from 'react-redux';
import uniqueid from 'uniqid';

class Home extends Component {
  componentDidMount(){
    this.setProducts();
    }
  setProducts () {
      let allProducts = [];
      products.map(product => {
            const singleItem = {...product}
            allProducts = [...allProducts, singleItem];  
      });
      this.props.initialProducts(allProducts);
    }
  render() {
    const meta = {
      title: 'Магазин',
      description: '',
      canonical: '',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: ''
        }
      }
    };
    const randomIndex = [];
    const {items} = this.props;
    while(randomIndex.length < 6){
      randomIndex.push(Math.ceil(Math.random() * items.length - 1))
    }
    return (
      <DocumentMeta {...meta}>
      <div className="home-page">
        <CategoriesList/>
         <div className="random-products-list"> <h1>Популярні товари</h1>{
           randomIndex.length == 6  && items.length > 0 ? randomIndex.map(index => {
            return <Product key={uniqueid()} product={items[index]}/>
            }) : <h1>Товарів немає</h1>
          }
          </div>
      </div>
      </DocumentMeta>
    )
  }
}
const mapStateToProps = state => ({
  items: state.products.items
});
export default connect(mapStateToProps, { initialProducts })(Home)