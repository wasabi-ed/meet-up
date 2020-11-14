import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useParams, useLocation } from "react-router-dom";
import { More } from "./More";
import PropTypes from "prop-types";
import Group1 from "./Group1";
import { Context } from "../store/appContext";

export function Details(props) {
	const { store, actions } = useContext(Context);
	let params = useParams();

	let group = actions.getGroup(props.events.group);
	return (
		<div className="card">
			<div className="card-header bg-light text-left">
				<strong>Date: {props.events.date}</strong>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item text-center">
					<p className="text-left">
						<strong>Time: {props.events.time}</strong>
					</p>
					<Link
						to={{
							pathname: "/more/" + props.events.id
						}}>
						{props.events.title}
					</Link>
					<p>
						<Link
							to={{
								pathname: "/group/" + group.id
							}}>
							{group.name}
						</Link>
					</p>
				</li>
			</ul>
		</div>
	);
}

Details.propTypes = {
	events: PropTypes.object,
	groups: PropTypes.object
};
