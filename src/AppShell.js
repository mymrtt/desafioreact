import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "./style.css";

import Header from './Header';
import List from './List';
import New from './New';
import Select from './Select';
import Edit from './Edit';

export default class AppShell extends Component {
  constructor(props){
    super(props);
      this.state = {
        
      };
  }
  render(){
    return (
      <div className="body">
        <Header />
        <div className="container">
          <Lista />
          <Switch>
            <Route path="/List" component={List} />
            <Route exact path="/" component={Select} />
            <Route path="/New" component={New} />
            <Route path="/Edit" component={Edit} />
          </Switch>
        </div>
      </div>
    );
  }  
}
