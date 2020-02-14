import React, { useState } from "react";
import logo from "./assets/images/billie_logo_large.svg";
import "./App.scss";
import MartiansList from "./components/MartiansList";
import ModalWindow from "./components/ModalWindow";
import MartianForm from "./components/MartianForm";

const App = () => {
	const [selectedMartian, setSelectedMartian] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const onMartianClicked = martian => {
		setSelectedMartian(martian);
		setShowModal(true);
	};

	const onMartianEdited = editedMartian => {
		console.log("new martian", editedMartian);
	};

	const resetState = () => {
		setSelectedMartian(null);
		setShowModal(false);
	};

	return (
		<main className="app">
			<header className="app-header">
				<img src={logo} className="app-header-logo" alt="logo" />
			</header>
			<section className="app-body">
				<h2>Martians List</h2>
				<MartiansList onItemClick={onMartianClicked} />
			</section>
			{selectedMartian && (
				<ModalWindow isOpen={showModal} onClose={resetState}>
					<MartianForm
						item={selectedMartian}
						onItemEdit={onMartianEdited}
						onCancel={() => resetState()}
					/>
				</ModalWindow>
			)}
		</main>
	);
};

export default App;
