// @flow
import React, { Component } from 'react';
import './App.css';
import ToDo from './Containers/ToDo'
import StaticMessage from './Containers/StaticMessage'
import DynamicMessage from './Containers/DynamicMessage'
import FetchData from './Containers/FetchData'

type Props = {}
type State = {}

class App extends Component<Props, State> {

  render() {
    return (
      <div className="App">
       
        <ToDo />
        <StaticMessage />
        <DynamicMessage />
        <FetchData />

      </div>
    );
  }
}

export default App;
