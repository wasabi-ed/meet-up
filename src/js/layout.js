import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { ECDetails } from "./views/ECDetails";
import injectContext from "./store/appContext";
import { More } from "./views/More";
import { Jumbotron } from "./component/Jumbotron";
import { Jumbotron2 } from "./component/Jumbotron2";
import { Jum2D } from "./component/JumboG1";

import { NavBar } from "./component/NavBar";
import { Footer } from "./component/footer";
import { Details } from "./views/DetailsE";
import { Events } from "./views/Events";
import { Group1 } from "./views/Group1";
import { Group2 } from "./views/Group2";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<div className="card-rows">
								<div>
									<Events />
								</div>
							</div>
						</Route>
						<Route exact path="/group/1">
							<Group1 />
						</Route>
						<Route exact path="/group/2">
							<Group2 />
						</Route>
						<Route exact path="/more/:id">
							<ECDetails />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
