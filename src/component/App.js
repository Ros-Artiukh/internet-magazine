import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './Header';
import CartList from './Cart/CartList';
import ProductsList from './Product/ProductsList';
import Home from './Home';
import Details from '../component/Product/Details';
import Default from './Default';
import store from '../store';

class App extends Component {
    render () {
      return( 
          <Provider store={store}>
          <Router>
          <React.Fragment>
          <Header/>
          <Switch>
          <Route exact path="/index.html" component={Home}/>
          <Route path="/index.html/detail/:id" component={Details}/>
          <Route exact path="/index.html/products/:id/page/:page" component={ProductsList}/>
          <Route path="/index.html/cart" component={CartList}/>
          <Route component={Default}/>
          </Switch>
          </React.Fragment>
          </Router>
          </Provider>
      )  
    }
}

export default App;