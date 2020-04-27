// @ts-nocheck
import React from "react";
import { makeRequest } from "./utils";
export default class FilmItem extends React.Component {
  state = {
    film: null,
  };

  componentDidMount() {
    this.loadCurrentFilm();
  }

  async loadCurrentFilm() {
    try {
      const film = await makeRequest(this.props.match.url);
      this.setState({ film });
    } catch {
      // Todo error check this =]
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.filmID !== prevProps.match.params.filmID) {
      this.loadCurrentFilm();
    }
  }

  render() {
    const { film } = this.state;
    if (!film) {
      return null;
    }
    return (
        <>
      <div>
        <img alt='thing' src="https://upload.wikimedia.org/wikipedia/en/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg"
        style={{height: "400px", float: "left"}}/>
        <div style={{height:"400px"}}>
          <h2>{film.title}</h2>
          <h3>Directed by: {film.director}</h3>
          <h3>Produced by: {film.producer}</h3>
        </div>

      </div><br/>
      <p>{film.opening_crawl}</p>

          </>
    );
  }
}


const Filler = {"title":"The Empire Strikes Back","episode_id":5,"opening_crawl":"It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....","director":"Irvin Kershner","producer":"Gary Kurtz, Rick McCallum","release_date":"1980-05-17","characters":["http://swapi.dev/api/people/1/","http://swapi.dev/api/people/2/","http://swapi.dev/api/people/3/","http://swapi.dev/api/people/4/","http://swapi.dev/api/people/5/","http://swapi.dev/api/people/10/","http://swapi.dev/api/people/13/","http://swapi.dev/api/people/14/","http://swapi.dev/api/people/18/","http://swapi.dev/api/people/20/","http://swapi.dev/api/people/21/","http://swapi.dev/api/people/22/","http://swapi.dev/api/people/23/","http://swapi.dev/api/people/24/","http://swapi.dev/api/people/25/","http://swapi.dev/api/people/26/"],"planets":["http://swapi.dev/api/planets/4/","http://swapi.dev/api/planets/5/","http://swapi.dev/api/planets/6/","http://swapi.dev/api/planets/27/"],"starships":["http://swapi.dev/api/starships/3/","http://swapi.dev/api/starships/10/","http://swapi.dev/api/starships/11/","http://swapi.dev/api/starships/12/","http://swapi.dev/api/starships/15/","http://swapi.dev/api/starships/17/","http://swapi.dev/api/starships/21/","http://swapi.dev/api/starships/22/","http://swapi.dev/api/starships/23/"],"vehicles":["http://swapi.dev/api/vehicles/8/","http://swapi.dev/api/vehicles/14/","http://swapi.dev/api/vehicles/16/","http://swapi.dev/api/vehicles/18/","http://swapi.dev/api/vehicles/19/","http://swapi.dev/api/vehicles/20/"],"species":["http://swapi.dev/api/species/1/","http://swapi.dev/api/species/2/","http://swapi.dev/api/species/3/","http://swapi.dev/api/species/6/","http://swapi.dev/api/species/7/"],"created":"2014-12-12T11:26:24.656000Z","edited":"2014-12-15T13:07:53.386000Z","url":"http://swapi.dev/api/films/2/"}