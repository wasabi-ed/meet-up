import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { More } from "./views/More";
import { Jumbotron } from "./component/Jumbotron";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Details } from "./views/Details";
import { Events } from "./views/Events";
import { Group } from "./views/Group";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<div className="card-rows">
								<div>
									<Events />
								</div>
							</div>
						</Route>
						<Route exact path="/group">
							<Group />
						</Route>
						<Route exact path="/more">
							<More />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
