import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMovie : ''
    };
  }


  handleChange = (e) => {
    this.setState({
      inputMovie : e.target.value
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      inputMovie: ''
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form>
          <input type="text" onChange={this.handleChange} value={this.state.inputMovie}/>
          {/* <button onClick={this.handleClick}>movie</button> */}
        </form>
        <Display movie={this.state.inputMovie} />
      </div>
    );
  }
}

export default App;
