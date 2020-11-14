import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Details } from "./DetailsE";
import { Jumbotron } from "../component/Jumbotron";
import { Context } from "../store/appContext";

export function Events() {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Jumbotron />
			<div className="row col-md-4 m-auto">
				{store.events.map((events, index) => (
					<Details key={index} events={events} />
				))}
			</div>
		</div>
	);
}
