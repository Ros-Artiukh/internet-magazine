import React, { Component } from 'react';
import './FilterPrice.scss';

export default class FilterPrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            min: 0,
            max: 0,
            slide1:0,
            slide2: 0
        }
    }
    componentDidMount(){
        this.setPrice();
    }
    componentDidUpdate(){
        const {min, max, slide1, slide2} = this.state;
        if(slide1 > slide2 || slide2 < slide1){
            this.setState({
                slide1: min,
                slide2: max
            })
        }
    }
    setPrice(){
        const{products} = this.props;
        const arr = [];
        products.map(item => {
            arr.push(item.price)
        })
       let min = Math.min(...arr);
       let max = Math.max(...arr);
       this.setState({
           min: min,
           max: max,
           slide1: min,
           slide2: max 
       })       
    }
  render() {
    const {min, max, slide1, slide2} = this.state;
    const {search} = this.props;
    const getValsMin = e => {
            this.setState({
                slide1: e.target.value
            })
      }
    const getValsMax = e => {
        this.setState({
            slide2: e.target.value
        })
      }
    const searchProducts = () => {
        search(slide1, slide2);
    }
    return (
      <div>
        <section className="range-slider">
  <div className="rangeValues"><h4>Ціна</h4></div>
  <input  min={min} max={max} step="50" onChange={getValsMin} value={slide1} type="range"/>
  <input  min={min} max={max} step="50" onChange={getValsMax} value={slide2} type="range"/>
  <span className="search-price">{slide1} - {slide2}</span>
  <button onClick={searchProducts} className="search-product">Шукати</button>
</section>
      </div>
    )
  }
}

   