import React, { Component } from 'react';
import SearchPhone from './SearchPhone';
import PhoneList from './PhoneList';
import '../styles/index.css';

class App extends Component{
  render(){
    return(
      <div>
        <SearchPhone />
        <PhoneList />
      </div>
    );
  }
}

export default App;