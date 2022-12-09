import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import getRandomNumber from "./utils/getRandomNumber";
import Residentcard from "./components/Residentcard";
import ResidentsList from "./components/ResidentsList";

function App() {
	const [location, setLocation] = useState();

	const getDataDimension = (idDimension) => {
		const URL = `https://rickandmortyapi.com/api/location/${idDimension}`;
		axios
			.get(URL)
			.then((res) => setLocation(res.data))
			.catch((err) => {
				console.log(err);
				alert("dimension not found");
			});
	};

	useEffect(() => {
		const randomDimension = getRandomNumber();
		getDataDimension(randomDimension);
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const dimensionSearch = event.target.searchvalue.value;
		getDataDimension(dimensionSearch);
	};
	return (
		<div className="App ">
			<header className="header">
				<h1 className="animate__hinge" alt="create by jonathan caceres">
					RICK AND MORTY-APP{" "}
				</h1>
				<form onSubmit={handleSubmit}>
					<input
						className="App-header-form-input"
						id="searchvalue"
						type="text"
						placeholder="search your dimension"
					/>
					<button className="App-form-button" type="submit">
						Search
					</button>
				</form>
			</header>

			<LocationInfo location={location} />
			<ResidentsList location={location} />
		</div>
	);
}

export default App;
