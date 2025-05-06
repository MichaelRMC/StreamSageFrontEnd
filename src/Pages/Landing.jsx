import React from 'react'
import NavBar from '../Components/NavBar'
import HeroSearchBar from '../Components/HeroSearchBar';
import MovieSeriesTitleGrid from '../Components/MovieSeriesTitleGrid';
function Landing() {
  return (
		<div>
      <NavBar />
      <MovieSeriesTitleGrid />
	  	<HeroSearchBar />
		</div>
	);
}

export default Landing