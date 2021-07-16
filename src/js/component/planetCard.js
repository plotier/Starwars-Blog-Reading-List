import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const PlanetCard = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Star Wars planets description by Iñaki</p>
				<Link to={"/planet/" + props.uid}>
					<button type="button" className="btn btn-primary">
						More {props.name} info!
					</button>
				</Link>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	uid: PropTypes.string
};
