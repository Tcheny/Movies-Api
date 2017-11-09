import React, { Component } from 'react';
import request from 'request';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }

  componentWillReceiveProps(nextProps) {
    request(`https://api.themoviedb.org/3/search/movie?query=${nextProps.movie}&api_key=9a00c92b359d69ed401294b05e89bac2&language=fr`, (err, res, body)=> {
      let query = JSON.parse(body)
      this.setState({
        data : query.results//{
        //  originalTitle : query.results[0].original_title,
        //  date : query.results[0].release_date,
        //  poster : query.results[0].poster_path,
        //  overview : query.results[0].overview,
        //  note : query.results[0].vote_average
        // }
      });
      console.log(this.state.data);
      });
  }

  render() {
    let image = 'https://image.tmdb.org/t/p/w500/'
    return (
      <div>
        {this.state.data &&
          this.state.data.map((movie,index)=>{
            return (
              <div>
                <li key={index}><a href="">{movie.title}</a>
                  <img src={`${image}${movie.poster_path}`} alt=""/>
                </li>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Display;
