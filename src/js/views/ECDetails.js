import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Details } from "./DetailsE";
import { Context } from "../store/appContext";
import { SmallEventCard } from "../component/SmallEventCard";
import { useParams } from "react-router-dom";
import { More } from "./More";

export function ECDetails() {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let content = actions.getContent(params.id);
	return (
		<div>
			<div>
				<More content={content} />
			</div>
		</div>
	);
}
