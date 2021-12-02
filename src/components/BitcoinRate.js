import axios from "axios";
import { useEffect, useState } from "react";

const BitcoinRate = () => {
	const [rate, setRate] = useState(null);

	useEffect(() => {
		const options = {
			method: "GET",
			url: "https://alpha-vantage.p.rapidapi.com/query",
			params: {
				from_currency: "BTC",
				function: "CURRENCY_EXCHANGE_RATE",
				to_currency: "USD",
			},
			headers: {
				"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
			},
		};

		axios
			.request(options)
			.then((response) => {
				console.log(
					response.data["Realtime Currency Exchange Rate"][
						"5. Exchange Rate"
					]
				);
				const rate =
					response.data["Realtime Currency Exchange Rate"][
						"5. Exchange Rate"
					];
				setRate(parseFloat(rate).toFixed(2));
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className="bitcoin-rate">
			<h3> Bitcoin Rate: </h3>

			<p>{rate}</p>
		</div>
	);
};

export default BitcoinRate;
