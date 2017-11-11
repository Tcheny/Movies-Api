import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import Display from './Display';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : ''
    };
  }

  queryTitle = (query) => {
    this.setState({
      movies : query
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Input queryTitle={this.queryTitle}/>
          <Display movies={this.state.movies} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
