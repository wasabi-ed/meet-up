import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { More } from "./More";
import PropTypes from "prop-types";
// import Group from "./Group";

export function Details(props) {
	return (
		<div className="card">
			<div className="card-header bg-light text-left">
				<strong>Date: {props.events.date}</strong>
			</div>
			{/* <ul className="list-group list-group-flush">
				<li className="list-group-item text-center">
					<p className="text-left">
						<strong>Time: {props.time}</strong>
					</p>
					<Link to="/more">{props.event} </Link>
					<p>
						<Link to="/group">Group 1</Link>
					</p>
				</li>
			</ul> */}
		</div>
	);
}

Details.propTypes = {
	events: PropTypes.object
};
