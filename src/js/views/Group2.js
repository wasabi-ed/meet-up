import React, { useContext } from "react";
import { Details } from "./DetailsE";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { JumboG2 } from "../component/JumboG2";
import { Context } from "../store/appContext";

export function Group2() {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<JumboG2 />
			<div className="row col-md-4 m-auto">
				<p className="text-center">Next Events</p>
				{store.events.map((events, index) => (
					<Details key={index} events={events} />
				))}
			</div>
		</div>
	);
}
