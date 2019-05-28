import React, { Component } from 'react'
import categories from '../../category';
import {Link} from 'react-router-dom';
export default class SubCategory extends Component {
  render() {
    let {subcategory} = this.props;
    let cat=[];
    categories.map(item => 
      subcategory.map(sub => 
        item.id === sub ? (cat.push(item), cat.push(categories[item.subcategory - 1])) :''
      )
    )
    return (
      <div>
{
  cat.length > 0 ?(
    cat.map(elem => {
        return  <ul key={elem.id} className="sub-category">
        {elem.subcategory[0]===null ? <li className="end-category"><Link  to={`/index.html/products/${elem.id}/page/1`}>{elem.category}</Link></li> : <li><Link  to={`/index.html/products/${elem.id}/page/1`}>{elem.category}</Link></li>}
        </ul>
      })) : false
}
      </div>
    )
  }
}
