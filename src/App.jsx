import React from "react";
import logo from "./assets/images/billie_logo_large.svg";
import "./App.scss";
import MartiansList from "./components/MartiansList";

const App = () => {
	return (
		<main className="app">
			<header className="app-header">
				<img src={logo} className="app-header-logo" alt="logo" />
			</header>
			<section className="app-body">
				<h2>Martians List</h2>
				<MartiansList />
			</section>
			<footer className="app-footer"></footer>
		</main>
	);
};

export default App;
