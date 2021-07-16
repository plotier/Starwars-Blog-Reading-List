import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const SingleCharacter = () => {
	const [details, setDetails] = useState();
	let { characterId } = useParams();
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + characterId)
			.then(response => response.json()) //Header o saber qué pasó con llamada
			.then(data => {
				// Se procesa la información
				setDetails(data.result);
				console.log(data.result);
			})
			.catch(error => console.log(error));
	}, []);
	console.log(details);
	/*const listDetails = details.map(detail => {
		return (
			<div className="col" key={detail.uid}>
				
			</div>
		);
	});*/
	return (
		<div className="card m-auto" style={{ width: "36rem" }}>
			<img
				className="card-img-top"
				src="https://assets.catawiki.nl/assets/2018/7/10/0/3/6/0367fc7b-738b-4c00-8e26-2672ffca6827.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">
					<ul>
						<li>{details ? details.properties.name : ""}</li>
						<li>{details ? details.properties.gender : ""}</li>
					</ul>
				</h5>
				<p className="card-text">Star Wars</p>
			</div>
		</div>
	);
};
