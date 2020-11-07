import React, { useState } from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const NavBar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<ul className="nav nav-fill bg-dark">
			<li className="nav-item">
				<Link to="/">
					<img src={rigoImage} className="card-img" alt="..." />
				</Link>
			</li>
			<li className="nav-item justify-content-end">
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
			</li>
		</ul>
	);
};
