import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Card } from "./card";

export const CharactersList = () => {
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
		if (index < 6) {
			return (
				<div className="col" key={character.uid}>
					<Card name={character.name} url={character.url} uid={character.uid} />
				</div>
			);
		}
	});
	return listCharacters;
};
