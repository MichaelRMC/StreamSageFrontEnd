import React, { useState, useEffect } from "react";
const axios = require("axios")
function useFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = setState(false);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				setData(response.data);
				setIsLoading(false);
			} catch ( error )
			{
				setError( error )
				setIsLoading(false)
			}
		};
		fetchData();
	},[url]);

	return {data, error, isLoading};
}

export default useFetch;
