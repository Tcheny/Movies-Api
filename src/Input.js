import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle : ''
    };
  }

  handleChange = (e) => {
    this.setState({
      inputTitle : e.target.value
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.queryTitle(this.state.inputTitle)
    this.setState({
      inputTitle : ''
    });
  }

  render() {
    return (
      <div>
        <form>
          <TextField
            hintText="Rechercher un film"
            type="text" onChange={this.handleChange} value={this.state.inputTitle}/>
          <RaisedButton label="Rechercher" type="submit" style={style} primary={true} onClick={this.handleClick} />
        </form>
      </div>
    );
  }

}

export default Input;
