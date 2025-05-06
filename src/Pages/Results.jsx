import React from 'react';
import NavBar from "../Components/NavBar";
import ResultsContainer from "../Components/ResultsContainer"
import RecommendationsFooter from "../Components/RecommendationsFooter"

function Results() {
  return (
		<div>
		<NavBar />
		<ResultsContainer />
		<RecommendationsFooter />
		</div>
	);
}

export default Results