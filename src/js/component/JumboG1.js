import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function JumboG1(props) {
	return (
		<div className="jumbotron text-left jumbotron-fluid bg-dark">
			<div className="container text-center">
				<h1 className="display-4 text-light">Group 1</h1>
				<h3 className="text-light">Location</h3>
				<p className="text-light">Miami, FL</p>
			</div>
		</div>
	);
}

// Jum2D.propTypes = {
// 	event: PropTypes.string
// };
