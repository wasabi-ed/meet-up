import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
// import { Details } from "./Details";

export const SmallEventCard = () => (
	<div className="card card3 m-5 col-6">
		<div clasName="card-body">
			<i className="fas fa-clock" /> Saturday, Oct. 31st 2021
			<p>9:00 p.m.</p>
			<p>One night only!</p>
		</div>
	</div>
);
