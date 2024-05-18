import React from "react";

function NavBar() {
	return (
		<div>
			<header>
				<nav>
					<div className='nav-searchbar'>
						<form>
							<h1 className='nav-logo'>StreamSage</h1>
							<div>
								<input
									type='search'
									id='search'
									name='search'
									placeholder='Search'
								/>
								<button type='submit'>Submit</button>
							</div>
						</form>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default NavBar;
