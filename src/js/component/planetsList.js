import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Card } from "./card";

export const PlanetsList = () => {
	const [planets, setPlanets] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/")
			.then(response => response.json()) //Header o saber qué pasó con llamada
			.then(data => {
				// Se procesa la información
				setPlanets(data.results);
				console.log(data.results);
			});
	}, []);
	const listPlanets = planets.map((planet, index) => {
		if (index < 6) {
			return (
				<div className="col" key={planet.uid}>
					<Card name={planet.name} url={planet.url} uid={planet.uid} />
				</div>
			);
		}
	});
	return listPlanets;
};
