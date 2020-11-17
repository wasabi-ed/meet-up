import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import rigoImage from "../../img/rigo-baby.jpg";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export function JumbotronMore(props) {
	const { store, actions } = useContext(Context);
	let params = useParams();
	let date = actions.getDate(params.id);
	let title = actions.getTitle(params.id);
	// let group = actions.getGroup(props.events.group);

	return (
		<div>
			<div className="jumbotron text-left jumbotron-fluid bg-dark">
				<div className="row">
					<div className="col-sm-6">
						<div className="card bg-transparent info-card">
							<div className="card-body">
								<p className="card-text">{date.date}</p>
								<h5 className="card-title">{title.title}</h5>
								{/* <p>
									<Link
										to={{
											pathname: "/group/" + group.id
										}}>
										{group.name}
									</Link>
								</p> */}
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card text-center rsvp-card bg-light">
							<div className="card-body">
								<h5 className="card-title">People Going</h5>
								<a href="#" className="btn btn-primary">
									Login to RSVP
								</a>
								<p className="card-text">
									<i className="fab fa-facebook-square icon" />
									<i className="fab fa-twitter icon" />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
JumbotronMore.propTypes = {
	events: PropTypes.object,
	groups: PropTypes.object
};
