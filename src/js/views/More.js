import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { DetailsE } from "./DetailsE";
import { SECDetails } from "../views/SECDetails";
import { JumbotronMore } from "../component/JumbotronMore";
import { SmallEventCard } from "../component/SmallEventCard";
import { Context } from "../store/appContext";

export function More(props) {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let content = actions.getContent(params.id);
	return (
		<div>
			<JumbotronMore />
			<div className="row">
				<div className="card card2 m-5 col-6">
					<img className="card2-img-top" src={rigoImage} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Details</h5>
						<p className="card-text">{content.content}</p>
						<p>A few reminders for this event:</p>
						<ul>
							<li>{content.content2}</li>
							<li>{content.content3}</li>
							<li>{content.content4}</li>
						</ul>
					</div>
				</div>
				<div className="small-event-card">
					<SECDetails />
				</div>
			</div>
		</div>
	);
}
