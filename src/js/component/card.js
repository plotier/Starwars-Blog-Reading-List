import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				className="card-img-top"
				src="https://i.blogs.es/26ba45/star-wars-eras/450_1000.jpeg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Star Wars planets and characters description by Iñaki</p>
				<Link to={"/character/" + props.uid}>
					<button type="button" className="btn btn-primary">
						Click Me!
					</button>
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	uid: PropTypes.string
};
