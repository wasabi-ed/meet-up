import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Details } from "./DetailsE";
import { Context } from "../store/appContext";
import { SmallEventCard } from "../component/SmallEventCard";
import { useParams } from "react-router-dom";

export function SECDetails() {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let date = actions.getDate(params.id);
	return (
		<div>
			<div>
				<SmallEventCard face={date} />
			</div>
		</div>
	);
}
