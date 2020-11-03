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
		<div className="jumbotron jumbotron fluid bg-dark">
			<div className="container">
				<div className="logo">
					<Link to="/">
						<img src={rigoImage} className="card-img" alt="..." />
					</Link>
				</div>
				<h1 className="display-4 text-light">Meetup Clone</h1>
				<p className="lead text-light">This is a mini-project created by 4Geeks Academy.</p>
				<button type="button" className="btn btn-primary" variant="primary" onClick={handleShow}>
					Login
				</button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Login</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">
									Well never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
							{/* <Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Check me out" />
							</Form.Group> */}
							<Button variant="primary" type="submit">
								Login
							</Button>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						{/* <Button variant="secondary" onClick={handleClose}>
							Login
						</Button> */}
						{/* <Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button> */}
					</Modal.Footer>{" "}
				</Modal>
			</div>
		</div>
	);
};