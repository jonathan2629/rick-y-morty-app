import React from "react";

const LocationInfo = ({ location }) => {
	return (
		<article className="LocationInfo">
			<h2 className="LocationInfo-planet">{location?.name}</h2>
			<ul className="LocationInfo-list">
				<li
					className="LocationInfo-list-titles"
				>
					
					<span>Type: {location?.type}</span>
				</li>
				<li>
					<span>Dimension: {location?.dimension}</span>
				</li>
				<li>
					<span>population: {location?.residents.length}</span>
				</li>
			</ul>
		</article>
	);
};

export default LocationInfo;
