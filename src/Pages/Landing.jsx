import React from "react";
import NavBar from "../Components/NavBar";
import HeroSearchBar from "../Components/HeroSearchBar";
import MovieTitleCard from "../Components/MovieTitleCard";
import MovieSeriesTitleGrid from "../Components/MovieSeriesTitleGrid";
function Landing() {
  return (
    <div>
      <NavBar />
      <MovieTitleCard />
      <MovieSeriesTitleGrid />
      <HeroSearchBar />
    </div>
  );
}

export default Landing;
