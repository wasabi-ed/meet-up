import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useParams, useLocation } from "react-router-dom";
import { JumbotronMore } from "./JumbotronMore.js";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export function JumbotronMoreEvents() {
	const { store, actions } = useContext(Context);
	console.log(store.events);

	return (
		<div>
			<div className="row col-md-4 m-auto">
				{store.events.map((events, index) => (
					<JumbotronMore key={index} events={events} />
					// <h1 key={index}>{events.title}</h1>
				))}
			</div>
		</div>
	);
}
