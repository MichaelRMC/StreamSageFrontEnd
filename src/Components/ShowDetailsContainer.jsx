import React from "react";

function ShowDetailsContainer() {
	return (
		<section>
			<div>
				<article class='show-details-title-card'>
					<img src='https://i.redd.it/txne73o16iic1.jpeg' />
				</article>
			</div>
			<div>
				<article class='show-details-info-container'>
					<h3>Movie/Series Title</h3>
					<p>Type: Movie/TV Series</p>
					<span>
						<em>Year of Release</em>
					</span>
					<p>Streaming Service(/s)/</p>
				</article>
			</div>
		</section>
	);
}

export default ShowDetailsContainer;
