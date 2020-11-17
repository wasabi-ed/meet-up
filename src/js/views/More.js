import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { DetailsE } from "./DetailsE";
import { SmallEventCard } from "../component/SmallEventCard";
import { JumbotronMore } from "../component/JumbotronMore";

export const More = () => (
	<div>
		<JumbotronMore />
		<div className="row">
			<div className="card card2 m-5 col-6">
				<img className="card2-img-top" src={rigoImage} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Details</h5>
					<p className="card-text">
						I think we all know how Halloween works. We will all gather at the local watering hole for some
						intense pre gaming. Afterwards, we will hit the town for some costume shenanigans!
					</p>
					<p>A few reminders for this event:</p>
					<ul>
						<li>Wear a cool costume.</li>
						<li>Bring lots of candy.</li>
						<li>Invite your friends!</li>
					</ul>
				</div>
			</div>
			<div className="small-event-card">
				<SmallEventCard />
			</div>
		</div>
	</div>
);
