import React from "react";

import Cardlists from "./Cardlists";
import User from "./User";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = (props) => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Cardlists} />
				<Route path="/:id" component={User} />
			</Switch>
		</Router>
	);
};

export default App;
