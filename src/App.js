import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : ''
    };
  }

  handleChange = (e) => {
    this.setState({
      movies : e.target.value
    });
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      inputTitle : ''
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Qu'est ce qu'on cherche aujourd'hui ?</h1>
        <MuiThemeProvider>
          <form>
            <TextField
              hintText="Rechercher un film"
              type="text" onChange={this.handleChange} value={this.state.movies}/>
            <button className='button-search' onClick={this.handleClick}>Rechercher</button>
          </form>
          <Display movies={this.state.movies} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
