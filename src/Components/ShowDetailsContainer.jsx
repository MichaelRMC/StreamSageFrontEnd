import React from "react";
import ShowDetailsTitleCard from "./ShowDetailsTitleCard";
import "./ShowDetailsContainer.css";

function ShowDetailsContainer() {
	return (
		<section>
			<div>
				<article className='show-details-title-card'>
					<ShowDetailsTitleCard />
				</article>
			</div>
			<div>
				<article className='show-details-info-container'>
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
