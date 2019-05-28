import React, { Component } from 'react';
import categories from '../../category';
import './CategoriesList.scss';
import { connect } from 'react-redux';
import { cleanCat} from '../../actions/magazineActions';
import Category from './Category';

class CategoriesList extends Component {

  render() {
    let closeCategory = e => {
    e.target.className === 'menu-categories' ? this.props.cleanCat() : false
    }
    return ( 
      <div onMouseOut={closeCategory} onMouseOver={closeCategory} className="container-category">
      <div  className="menu-categories">
        <ul>
        {categories.map(item => item.main ? <Category key={item.id} category={item}/> : '')}
        </ul>
        <div  className="sub-categories"></div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  id: state.subCategory.id,
  sub: state.subCategory.sub
});
export default connect(mapStateToProps, { cleanCat })(CategoriesList)