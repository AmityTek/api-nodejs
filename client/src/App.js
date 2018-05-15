import React, { Component } from 'react';

import BrowserRouter from 'react-router-dom/BrowserRouter';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

import List from './pages/List';
import Details from './pages/Details';
import Add from './pages/Add';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Node test</h1>
          <nav>
            <ul>
              <li><Link to="/">List</Link></li>
              <li><Link to="/add">Add new entry</Link></li>
            </ul>
          </nav>

          <div>
            <Switch>
              <Route exact path="/" component={List}/>
              <Route exact path="/entry/:id" component={Details}/>
              <Route exact path="/add" component={Add} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
