import React, { Component } from 'react';
import request from 'request';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : '',
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    request(`https://api.themoviedb.org/3/search/movie?query=${nextProps.movies}&api_key=9a00c92b359d69ed401294b05e89bac2&language=fr`, (err, res, body)=> {
      let query = JSON.parse(body)
      this.setState({
        data : query.results
      });
    });
  }

  handleOpen = (index) => {
    this.setState({
      open: true,
      movie : this.state.data[index]
    })
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const image = 'https://image.tmdb.org/t/p/w500';
    const actions = [
      <FlatButton
        label="Fermer"
        primary={true}
        onClick={this.handleClose}
      />
    ]
    return (
      <div>
        {this.state.data &&
          this.state.data.map((movie,index)=>{
            return (
              <div className="button-list">
                <button className='button' onClick={() => this.handleOpen(index)}>
                  <img className='button-img' src={`${image}${movie.poster_path}`} alt="no poster"/>
                  <h3 className='button-title'>{movie.title}</h3>
                  ({movie.release_date && movie.release_date.substring(0,4)})
                </button>

                {this.state.movie &&
                  <Dialog
                    title={this.state.movie.title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                  >
                    <div className="modal">
                      <h1>Titre original : {this.state.movie.original_title}</h1>
                      <p>Date de sortie {this.state.movie.release_date && this.state.movie.release_date.replace(/[-]/g, '/').split('/').reverse('').join('/')}</p>
                      <img className='poster' src={`${image}${this.state.movie.poster_path}`} alt=""/>
                      {this.state.movie.overview === "" ? '': <div className="overview"><h3>SYNOPSIS ET DÉTAILS  </h3> <p>{this.state.movie.overview}</p></div> }
                      <img src={`${image}${this.state.movie.backdrop_path}`} alt=""/>
                      <p>Note : {this.state.movie.vote_average}/10</p>
                    </div>
                  </Dialog>
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Display;
