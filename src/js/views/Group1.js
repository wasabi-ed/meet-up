import React, { useContext } from "react";
import { Details } from "./DetailsE";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { More } from "./More";
import PropTypes from "prop-types";
import { JumboG1 } from "../component/JumboG1";
import { Context } from "../store/appContext";

export function Group1(props) {
	const { store, actions } = useContext(Context);
	let params = useParams();

	// let group = actions.getGroup(props.events.group);
	return (
		<div>
			<JumboG1 />
			<div>
				<p className="text-center">Next Events</p>
				{/* <Details /> */}
			</div>
		</div>
	);
}
Group1.propTypes = {
	groups: PropTypes.object,
	events: PropTypes.object
};
