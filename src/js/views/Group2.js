// import React, { useContext } from "react";
// import { Details } from "./DetailsE";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.scss";
// import { Link, useParams } from "react-router-dom";
// import PropTypes from "prop-types";
// import { JumboG2 } from "../component/JumboG2";
// import { Context } from "../store/appContext";

// export function Group2() {
// 	const { store, actions } = useContext(Context);
// 	let params = useParams();
// 	let events = actions.getEvent();

// 	return (
// 		<div>
// 			<JumboG2 />
// 			<div className="row col-md-4 m-auto">
// 				<p className="text-center">Next Events</p>
// 				{store.events.map((events, index) => {
// 					// console.log(params, events.group);
// 					if (parseInt(params.id) == events.group) {
// 						// console.log(true);
// 						return <Details key={index} events={events} />;
// 					}
// 				})}
// 			</div>
// 		</div>
// 	);
// }

// Group2.propTypes = {
// 	events: PropTypes.object,
// 	groups: PropTypes.object
// };
