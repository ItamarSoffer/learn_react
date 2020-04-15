import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom" ;
import Game from "./TicTacToe/Game"; 
import GitApp from "./Github_Cards/github_api_app"

function App() {
	return (

	<Router>
	<div>
		<nav>
		<ul>
			<li>
				<Link to="/"> Home </Link>
			</li>
			<li>
				<Link to="/xo"> TicTacToe </Link>
			</li>
			<li>
				<Link to="/git_cards"> Gitcards </Link>
			</li>
		</ul>
		</nav>

	<Switch>
	<Route path="/xo">
		<Game />
	</Route>
	<Route path="/git_cards">
		<GitApp />
	</Route>
	<Route path= "/">
		<Home />
	</Route>

	</Switch>

	</div>
	</Router>
);
}

function Home() {

	return (
		<h2> Home </h2>
		);
}

export default App