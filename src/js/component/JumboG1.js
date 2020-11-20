import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Group1 } from "../views/Group1";
import { Context } from "../store/appContext";

export function JumboG1(props) {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let groups = actions.getLocation(params.id);

	return (
		<div className="jumbotron text-left jumbotron-fluid bg-dark">
			<div className="row jumbo-G1">
				<div>
					<img className="jumbo-img m-5 col-6" src={rigoImage} alt="Card image cap" />
				</div>
				<div className="container col-6">
					<h1 className="display-4 text-light">{groups.name}</h1>
					<h3 className="text-light">Location</h3>
					<p className="text-light">{groups.location}</p>
				</div>
			</div>
		</div>
	);
}

JumboG1.PropTypes = {
	groups: PropTypes.object
};
