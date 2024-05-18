import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "../src/Pages/Landing";
import Results from "../src/Pages/Results";
import ShowDetails from "../src/Pages/ShowDetails"

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={ <Landing /> } />
					<Route path="/details" element={ <ShowDetails /> } />
					<Route path="/results" element={<Results />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
