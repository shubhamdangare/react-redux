import React, { Component } from 'react';
import Search from '../container/search';
import Citylist from '../container/citylist';
export default class App extends Component {
  render() {
    return (
      <div>
       <Search />
       <Citylist />
      </div>
    );
  }
}
