import React from 'react'
import Nav from './Nav'
import Products from './Products'
import ShopPolicies from './ShopPolicies'
import './App.css'
import Contact from './Contact'
import Cart from './Cart'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='App'>
        <body>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/shoppolicies' component={ShopPolicies}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/cart' component={Cart}/>
          </Switch>
        </body>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
