import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Star Wars planets by Iñaki</p>
				<Link to={"/planet/" + props.uid}>
					<button type="button" className="btn btn-primary">
						More {props.name} info!
					</button>
				</Link>
				<br />
				<button
					type="button"
					className="btn btn-outline-dark"
					onClick={e => {
						if (e.target.className == "btn btn-outline-dark") {
							e.target.className = "btn btn-danger";
						} else {
							e.target.className = "btn btn-outline-dark";
						}
						actions.addFavorites(props.name);
						console.log(store.favorites);
					}}>
					♥
				</button>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	uid: PropTypes.string
};
