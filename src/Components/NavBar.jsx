import React from "react";
import "./NavBar.css";
function NavBar() {
	return (
		<div>
			<header>
				<nav>
					<div className='nav-header'>
						<h1 className='nav-logo'>StreamSage</h1>
						<div className='nav-searchbar'>
							<input
								type='search'
								id='search'
								name='search'
								placeholder='Search'
							/>
							<button className="submit" type='submit'>Submit</button>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default NavBar;
