import React, { useState, useEffect } from "react";

export const Card = () => {
	const [personajes, setPersonajes] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/1")
			.then(response => response.json()) //Header o saber qué pasó con llamada
			.then(data => {
				// Se procesa la información
				setPersonajes(data);
			});
	}, []);
	const listPersonajes = personajes.map(personaje => (
		<li key={personaje.id}>
			{personaje.name} - {personaje.species}
		</li>
	));

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://i.blogs.es/26ba45/star-wars-eras/450_1000.jpeg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">
					<ul>{listPersonajes}</ul>
				</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
