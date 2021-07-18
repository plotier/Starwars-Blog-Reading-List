import React, { useState, useEffect } from "react";
import "../../styles/home.scss";

import { CharactersList } from "../component/charactersList";
import { PlanetsList } from "../component/planetsList";

export const Home = () => {
	return (
		<div className="container text-center mt-5">
			<h1 className="m-4 display-1">Personajes</h1>
			<div className="row">
				<CharactersList />
			</div>
			<h1 className="m-4 display-1">Planetas</h1>
			<div className="row">
				<PlanetsList />
			</div>
		</div>
	);
};
