import React, { useState } from "react";
import { Details } from "./DetailsE";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { More } from "./More";
import PropTypes from "prop-types";
import { Jumbotron2 } from "../component/Jumbotron2";

export function Group1() {
	const [dates, setDates] = useState([
		{ date: "October 31", time: "8:00 am ", event: "Halloween" },
		{ date: "November 26", time: "8:00 am ", event: "Thanksgiving" },
		{ date: "December 25", time: "8:00 am ", event: "Christmas" }
	]);
	return (
		<div>
			<Jumbotron2 />
			<div className="row col-md-4 m-auto">
				<p className="text-center">Next Events</p>
				{dates.map((date, index) => (
					<Details key={index} index={index} date={date.date} event={date.event} time={date.time} />
				))}
			</div>
		</div>
	);
}
