import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieSeriesTitleGrid.css";
import MovieTitleCard from "./MovieTitleCard";
import SeriesTitleCard from "./SeriesTitleCard";

function MovieSeriesTitleGrid() {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  const moviesApi = import.meta.env.VITE_API_MOVIE_RELEASES_URL;
  const tvSeriesApi = import.meta.env.VITE_API_TV_SERIES_RELEASES_URL;

  useEffect(() => {
    const fetchData = async (url, setter) => {
      try {
        const { data } = await axios.get(url);
        setter(data);

        if (moviesApi || tvSeriesApi) {
          console.log("Fetched data from:", url, data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(moviesApi, setMovies);
    fetchData(tvSeriesApi, setTvSeries);
  }, []);

  return (
    <section className="movie-series-list-titles-container">
      <div className="movie-list-titles-container">
        <div className="movies-container-h2">
          <h2>Movies</h2>
        </div>
        <article className="movies-container-title-cards">
          <div>
            {movies.length > 0 ? (
              movies.map((movie) => {
                const { id, title, year, imdb_id } = movie;
                return (
                  <MovieTitleCard
                    key={id}
                    movie={movie}
                    title={title}
                    year={year}
                    id={imdb_id}
                  />
                );
              })
            ) : (
              <p>No movies available.</p>
            )}
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
            {tvSeries.length > 0 ? (
              tvSeries.map((series) => {
                const { id, title, year, imdb_id } = series;
                return (
                  <SeriesTitleCard
                    key={id}
                    tvSeries={series}
                    title={title}
                    year={year}
                    id={imdb_id}
                  />
                );
              })
            ) : (
              <p>No series available.</p>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

export default MovieSeriesTitleGrid;
