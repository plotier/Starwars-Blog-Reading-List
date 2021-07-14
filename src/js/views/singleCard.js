import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const SingleCard = props => {
	const [details, setDetails] = useState([]);
	let { characterId } = useParams();
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + characterId)
			.then(response => response.json()) //Header o saber qué pasó con llamada
			.then(data => {
				// Se procesa la información
				setDetails(data.result.properties);
			});
	}, []);
	const listDetails = details.map(detail => {
		return (
			<div className="col" key={detail.uid}>
				<li name={detail.name} gender={detail.gender} url={detail.url} uid={detail.uid} />
			</div>
		);
	});
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://shoedoctor.eu/wp-content/uploads/2019/04/anonymous-silhouette.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">
					<ui>{listDetails}</ui>
				</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
			</div>
		</div>
	);
};