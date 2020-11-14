import React, { useContext } from "react";
import { Details } from "./DetailsE";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { More } from "./More";
import PropTypes from "prop-types";
import { JumboG1 } from "../component/JumboG1";
import { Context } from "../store/appContext";

export function Group1() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<JumboG1 />
			<div className="row col-md-4 m-auto">
				<p className="text-center">Next Events</p>
				{store.events.map((events, index) => (
					<Details key={index} events={events} />
				))}
			</div>
		</div>
	);
}
