import React from "react";
import Residentcard from "./Residentcard";

const ResidentsList = ({ location }) => {
	return (
		<div >
			<section className="location-residents">
				{location?.residents.map((urlResidents) => (
					<Residentcard
						key={urlResidents}
						urlResidents={urlResidents}
					/>
				))}
			</section>
		</div>
	);
};

export default ResidentsList;
