import { Component } from 'react';
import { Provider } from 'react-redux';
import Grid from './components/Grid';

import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h3> Miles Front End Challenge </h3>
        <Grid />
      </div>
    );
  }
}

export default App;
