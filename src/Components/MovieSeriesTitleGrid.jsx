import React, {useState, useEffect} from "react";
import axios from "axios";
import MovieTitleCard from './MovieTitleCard';
import SeriesTitleCard from './SeriesTitleCard'
import useFetch from '../Hooks/useFetch'
function MovieSeriesTitleGrid() {
	const [ movies, setMovies ] = useState( [] );
	const [ tvSeries, setTvSeries ] = useState( [] );
	const {data, error, isLoading} = useFetch()
	

	const api = import.meta.env.VITE_BASE_API_URL;
	const watchMode = import.meta.env.VITE_WATCHMODE_API_URL;
	const apiKey = import.meta.env.VITE_WATHMODE_API_KEY

	
	const getMovies = (data, error, isLoading) =>  {
		try
		{
			setIsLoading(true)
			const response = useFetch( "https://api.watchmode.com/v1/list-titles/?apiKey=Ui7YTeBauBSWqUNNDvb24p5Vwqfth0D0Wr7Hewll&types=movie&source_types=sub&sort_by=popularity_desc&page=1&limit=10" );
			setMovies( data );
			setIsLoading(false)
		} catch ( error )
		{
			console.log( error );
			setIsLoading(false)
		}
	
	}
	
useEffect(() => {
	async function getTvSeries ()
	{
		const tvSeries =
		"https://api.watchmode.com/v1/list-titles/?apiKey=Ui7YTeBauBSWqUNNDvb24p5Vwqfth0D0Wr7Hewll&types=tv-series&source_types=sub&sort_by=popularity_desc&page=1&limit=10";

		try {
			const response = await axios.get(
				`${watchMode}/list-titles/?apiKey=${apiKey}&&types=tv_series&source_types=sub&sort_by=popularity_desc&page=1&limit=10`
			);
			setTvSeries(response.data);
		} catch (error) {
			console.error(error);
		}
	}
	getTvSeries();
}, []);

	return (
		<section>
			<div className='movies-container'>
				<div className='movies-container-h2'>
					<h2>Movies</h2>
				</div>
				<article className='movies-container-title-cards'>
					<div>
						
						{movies.map((movie, id, imdb_id) => {
							return <MovieTitleCard key={id} movie={movie} id={imdb_id} />;
						})}
					</div>
				</article>
			</div>
			<div className='series-container'>
				<div className='series-container-h2'>
					<h2>Series</h2>
				</div>
				<article className='series-container-title-cards'>
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
