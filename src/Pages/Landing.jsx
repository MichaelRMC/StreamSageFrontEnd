import React from 'react'
import Header from '../Components/Header'
import HeroSearchBar from '../Components/HeroSearchBar';
import MovieSeriesTitleGrid from '../Components/MovieSeriesTitleGrid';
function Landing() {
  return (
		<div>
      		<Header />
      		<MovieSeriesTitleGrid />
	  		<HeroSearchBar />
		</div>
	);
}

export default Landing