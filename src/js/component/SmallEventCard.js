import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export function SmallEventCard(props) {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let date = actions.getDate(params.id);
	return (
		<div className="card card3 m-5 col-6">
			<div clasName="card-body">
				<i className="fas fa-clock" /> {date.date}
				<p>{date.time}</p>
				<p>One night only!</p>
			</div>
		</div>
	);
}
SmallEventCard.propTypes = {
	events: PropTypes.object,
	groups: PropTypes.object
};
