import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json()) //Header o saber qué pasó con llamada
			.then(data => {
				// Se procesa la información
				setCharacters(data.results);
				console.log(data.results);
			});
	}, []);
	const listCharacters = characters.map((character, index) => {
		if (index < 3) {
			return (
				<div className="col" key={character.uid}>
					<Card name={character.name} url={character.url} uid={character.uid} />
				</div>
			);
		}
	});

	return (
		<div className="container text-center mt-5">
			<h1>Personajes</h1>
			<div className="row">{listCharacters}</div>
			<h1>Planetas</h1>
			<div className="row">
				<div className="col">
					<h1>hi</h1>
				</div>
				<div className="col">
					<h1>hi</h1>
				</div>
				<div className="col">
					<h1>hi</h1>
				</div>
			</div>
		</div>
	);
};
