import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Details } from "./DetailsE";

export const More = () => (
	<div className="card2 m-5">
		<img className="card2-img-top" src={rigoImage} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">Details</h5>
			<p className="card-text">
				I think we all know how Halloween works. We will all gather at the local watering hole for some intense
				ore gaming. Afterwards, we will hit the town for some cosyume shenanigans!
			</p>
		</div>
	</div>
);
