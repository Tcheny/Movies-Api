import React, { Component } from 'react';
import request from 'request';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMovie : ''
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputMovie : e.target.value
    });
  }

  componentDidMount() {
    request(`https://api.themoviedb.org/3/search/movie?query=${this.state.inputMovie}?api_key=9a00c92b359d69ed401294b05e89bac2`, (err, res, body)=> {
      console.log(body);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form action="">
          <input type="text" onChange={this.handleChange} value={this.state.inputMovie}/>
        </form>
      </div>
    );
  }
}

export default App;
