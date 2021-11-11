import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Categories from './pages/Categories/Categories';
import Footer from './components/Footer/Footer';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/categories/subcategories/:id"
            component={Categories}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
