import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const favoriteList = store.favorites.map((item, index) => (
		<a className="dropdown-item d-flex justify-content-between" key={index} href="#">
			<li>{item}</li>
			<button
				onClick={() => {
					actions.removeFavorites(index);
					console.log(index);
				}}>
				<i className="fa fa-trash " />
			</button>
		</a>
	));
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{favoriteList}
					</div>
				</div>
			</div>
		</nav>
	);
};
