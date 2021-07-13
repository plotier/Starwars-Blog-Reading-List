import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";

export const Home = () => (
	<div className="container text-center mt-5">
		<h1>Personajes</h1>
		<div className="row">
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
		</div>
		<h1>Planetas</h1>
		<div className="row">
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
			<div className="col">
				<Card />
			</div>
		</div>
	</div>
);
