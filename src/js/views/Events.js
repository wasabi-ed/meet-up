import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Details } from "./DetailsE";
import { Jumbotron } from "../component/Jumbotron";
import { Context } from "../store/appContext";

export function Events() {
	const { store, actions } = useContext(Context);

	// const [dates, setDates] = useState([
	// 	{ date: "October 31", time: "8:00 am ", event: "Halloween" },
	// 	{ date: "November 26", time: "8:00 am ", event: "Thanksgiving" },
	// 	{ date: "December 25", time: "8:00 am ", event: "Christmas" }
	// ]);

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
