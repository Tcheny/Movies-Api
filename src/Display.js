import React, { Component } from 'react';
import request from 'request';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

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
      console.log(this.state.data);
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
    let image = 'https://image.tmdb.org/t/p/w500'
    return (
      <div>
        {this.state.data &&
          this.state.data.map((movie,index)=>{
            return (
              <div>
                <li key={index}>
                  <a onClick={() => this.handleOpen(index)}>{movie.title} ({movie.release_date && movie.release_date.substring(0,4)})</a>
                </li>
                <Dialog
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                  autoScrollBodyContent={true}

                >
                  {this.state.movie &&
                    <div className="modal">
                      <h1>{this.state.movie.original_title}</h1>
                      <p>Date de sortie {this.state.movie.release_date && this.state.movie.release_date.replace(/[-]/g, '/').split('/').reverse('').join('/')}</p>
                      <img className='poster' src={`${image}${this.state.movie.poster_path}`} alt=""/>
                      {this.state.movie.overview === "" ? '': <div><h3>SYNOPSIS ET DÉTAILS  </h3> <p>{this.state.movie.overview}</p></div> }
                      <img src={`${image}${this.state.movie.backdrop_path}`} alt=""/>
                      <p>{this.state.movie.vote_average}</p>
                    </div>
                  }
                </Dialog>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Display;
