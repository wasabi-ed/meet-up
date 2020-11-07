import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Details } from "./Details";

export const Home = () => (
	<div className="jumbotron text-center bg-dark">
		<div className="ml-auto">
			<Link to="/">
				<button className="btn btn-primary">Home</button>
			</Link>
		</div>
		<h1 className="text-light">The Meetup Clone</h1>
		<p className="text-light">
			This is a mini project created by by <a href="http://www.4geeksacademy.com">Catherine David Edward</a>
		</p>
	</div>
);
