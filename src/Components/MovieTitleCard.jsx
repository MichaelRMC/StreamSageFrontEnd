import React from 'react';
import './MovieTitleCard.css';

function MovieTitleCard({title, year}) {
  return (
		<div className='movie-title-card-container'>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/w500/${title}`}
					alt={`${title} poster`}
					className='movie-title-card-image'
				/>
				<h3>{title}</h3>
				<p>{year}</p>
			</div>
		</div>
	);
}

export default MovieTitleCard