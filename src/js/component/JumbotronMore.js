import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function JumbotronMore(props) {
	return (
		<div>
			<div className="jumbotron text-left jumbotron-fluid bg-dark">
				<div className="row">
					<div className="col-sm-6">
						<div className="card bg-transparent">
							<div className="card-body">
								<h5 className="card-title">Special title treatment</h5>
								<p className="card-text">
									With supporting text below as a natural lead-in to additional content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card text-center bg-light">
							<div className="card-body">
								<h5 className="card-title">People Going</h5>
								<a href="#" className="btn btn-primary">
									Login to RSVP
								</a>
								<p className="card-text">
									<i className="fab fa-facebook-square icon"></i>
									<i className="fab fa-twitter icon"></i>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
