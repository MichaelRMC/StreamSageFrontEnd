import React from 'react'
import './SeriesTitleCard.css'
function SeriesTitleCard({title, year}) {
  return (
		<div>
			<div>
				<img
					src={`https://image.tmdb.org/t/p/w500/${title}`}
					alt={`${title} poster`}
					className='series-title-card-image'
				/>
				<h3>{title}</h3>
				<p>{year}</p>  
			</div>
		</div>
	);
}

export default SeriesTitleCard