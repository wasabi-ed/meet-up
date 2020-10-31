import React, { useState } from "react";
import PropTypes from "prop-types";
import { Details } from "./Details";

export function Events() {
	const [dates, setDates] = useState([
		{ date: "October 31", time: "8:00 am ", event: "Halloween" },
		{ date: "November 26", time: "8:00 am ", event: "Thanksgiving" },
		{ date: "December 25", time: "8:00 am ", event: "Christmas" }
	]);

	return (
		<div>
			<div className="row">
				{dates.map((date, index) => (
					<Details key={index} index={index} date={date.date} event={date.event} time={date.time} />
				))}
			</div>
		</div>
	);
}
