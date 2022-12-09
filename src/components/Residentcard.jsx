import axios, { Axios } from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Residentcard = ({ urlResidents }) => {
	const [residents, setResidents] = useState();

	useEffect(() => {
		axios
			.get(urlResidents)
			.then((res) => {
				setTimeout(() => {
					setResidents(res.data);
				}, 4000);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<article className="resident-card ">
			{residents ? (
				<>
					<header className="resident-card-header">
					
						<img src={residents.image} alt="image ricky y morty" />
						<div className={`image${residents?.status}`}></div>
						<div className="resident-card-status">
							<div
								className={`circle ${residents?.status}`}
							></div>
							<span>{residents.status}</span>
						</div>
					</header>
					<section className="resident-card-body">
						<h2>Name: {residents.name}</h2>
						<ul className="resident-card-body-list">
							<li>
								<span>Specie: {residents.species}</span>
							</li>
							<li>
								<span>Origin: {residents.origin.name}</span>
							</li>
							<li>
								<span>
									Episodes Where He Appears:{" "}
									{residents.episode.length}
								</span>
							</li>
						</ul>
					</section>
				</>
			) : (
				<div className="loading">
					<img
						className="loading-img"
						src="data:image/png;base64,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"
						alt=""
					/>
					<p>loading.....</p>
				</div>
			)}
		</article>
	);
};

export default Residentcard;
77;
