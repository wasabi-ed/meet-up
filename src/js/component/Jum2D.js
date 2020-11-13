import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Jum2D(props) {
	return (
		<div className="jumbotron text-left jumbotron-fluid bg-dark">
			<div className="container">
				<h1 className="display-4 text-light"> {props.event} event for Group 1</h1>
			</div>
		</div>
	);
}

Jum2D.propTypes = {
	event: PropTypes.string
};
