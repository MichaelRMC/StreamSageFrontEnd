import React, { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect( () =>	{
		const fetchData = async () => {
		
			try {
				setIsLoading(true);
				const response = await axios.get({url});
				const data = await response.data
				console.log(data);
				setData(data);
				setIsLoading(false);
		
			} catch (error) {
				console.log(error);
				setError( error )
				setIsLoading(false)
			}
		
		};
		fetchData();
	},[url]);

	return {data, error, isLoading};
}

export default useFetch;
