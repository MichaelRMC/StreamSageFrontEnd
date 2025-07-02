import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieTitleCard from "./MovieTitleCard";
import SeriesTitleCard from "./SeriesTitleCard";
import useFetch from "../Hooks/useFetch";
import "./MovieSeriesTitleGrid.css";
function MovieSeriesTitleGrid() {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  const moviesApi = import.meta.env.VITE_API_MOVIE_RELEASES_URL;
  const tvSeriesApi = import.meta.env.VITE_API_TV_SERIES_RELEASES_URL;
 

  const getMovies = () => {

    try {
      const response = useFetch(moviesApi);
      const data = response.data;
      console.log(data);
      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  /*useEffect(() => {
	async function getTvSeries ()
	{
	
		try {
			const response = useFetch(tvSeriesApi);
			const data = response.data;
			setTvSeries(data);
		} catch (error) {
			console.error(error);
		}
	}
	getTvSeries();
}, []);
*/
  return (
	<section className="movie-series-list-titles-container">
    <div className="movie-list-titles-container"> 
        <div className="movies-container-h2">
          <h2>Movies</h2>
        </div>
        <article className="movies-container-title-cards">
          <div>
            {movies.map((movie, id, imdb_id) => {
              return <MovieTitleCard key={id} movie={movie} id={imdb_id} />;
            })}
          </div>
        </article>
    </div> 
    <br />
    <div className="series-list-titles-container"> 
      <div className="series-container-h2">
          <h2>Series</h2>
      </div>
        <article className="series-container-title-cards">
          <div>
            {tvSeries.map((tvSeries, id, imdb_id) => {
              return <SeriesTitleCard key={id} movie={tvSeries} id={imdb_id} />;
            })}
          </div>
        </article>
    </div>
  </section>
  );
}

export default MovieSeriesTitleGrid;
