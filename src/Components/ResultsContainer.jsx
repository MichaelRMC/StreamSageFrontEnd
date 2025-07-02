import React from "react";
import "./ResultsContainer.css";
function ResultsTitleCardContainer() {
	return (
		<div>
			<section>
				<div className='results-title-card-container'>
					<img src='https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_echo_2788_v2_74ac97d9.jpeg' />
					<img src='https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_echo_2788_v2_74ac97d9.jpeg' />
				</div>
				<div className='results-title-info-container'>
					<h3>Movie/Series Title</h3>
					<p>//(Series:# of seasons, # of episodes)//</p>

					<span>
						<em>Year of Release</em>
					</span>

					<p>Streaming Service(/s)/</p>
				</div>
			</section>
		</div>
	);
}

export default ResultsTitleCardContainer;
