import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setId, subId} from '../../actions/magazineActions';
import categories from '../../category';
import SubCategory from './SubCategory';
class Category extends Component {
  render() {
   let {id, category} = this.props.category;
   let showSubCategory = () => {
    categories.map(item => 
        item.id === id ? (
        this.props.setId(item.subcategory),
        this.props.subId(item.id)) : ''
      )
  }
     return (
      <React.Fragment>
        <li onMouseOver={showSubCategory}><Link key={id} id={id} to={`/index.html/products/${id}/page/1`}>
        {category}<i className="fas fa-angle-right"/></Link>
       {this.props.sub === id ? <SubCategory subcategory={this.props.id}/> : ''}  </li> 
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  id: state.subCategory.id,
  sub: state.subCategory.sub
});
export default connect(mapStateToProps, { setId, subId })(Category)