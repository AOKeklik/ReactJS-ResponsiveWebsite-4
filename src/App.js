import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "./App.css";
import * as Pages from './components/Pages'

class App extends Component {
  render() {
    return <Pages.ProductProvider>
      <BrowserRouter>

        <Pages.Navbar />

        <Switch>
          <Route exact path="/" component={Pages.ProductList} />
          <Route path="/details" component={Pages.Details} />
          <Route path="/cart" component={Pages.Cart} />
          <Route component={Pages.Default} />
        </Switch>

        <Pages.Modal />

      </BrowserRouter>
    </Pages.ProductProvider>
  }
}

export default App;
