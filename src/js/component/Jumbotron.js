import React, { useState } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Jumbotron = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="jumbotron text-center jumbotron-fluid bg-dark">
			<div className="container">
				<div className="logo">
					<Link to="/">
						<img src={rigoImage} className="img-jumbo" alt="..." />
					</Link>
				</div>
				<h1 className="display-4 text-light">Meetup Clone</h1>
				<p className="lead text-light">This is a mini-project created by Catherine, David, and Edward.</p>
			</div>
		</div>
	);
};
