import React, { useState, useEffect } from "react";
import logo from "./assets/images/billie_logo_large.svg";
import "./App.scss";
import MartiansList from "./components/MartiansList";
import ModalWindow from "./components/ModalWindow";
import MartianForm from "./components/MartianForm";
import { getMartiansList, editMartian } from "./services/martians-service";
import { findIndex } from "lodash";

const App = () => {
	const [selectedMartian, setSelectedMartian] = useState(null);
	const [martiansList, setMartiansList] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const fetchMartians = async () => {
		const martians = await getMartiansList();
		setMartiansList(martians.data);
	};

	useEffect(() => {
		fetchMartians();
	}, []);

	const onMartianClicked = martian => {
		setSelectedMartian(martian);
		setShowModal(true);
	};

	const onMartianEdited = async editedMartian => {
		try {
			const savedMartian = await editMartian(editedMartian);
			setMartiansList(prevState => {
				let itemIndex = findIndex(prevState, { id: editedMartian.id });
				if (~itemIndex) {
					prevState[itemIndex] = savedMartian;
				}
				return prevState;
			});
			setShowModal(false);
		} catch (error) {
			console.log(error);
		}
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
				<MartiansList martians={martiansList} onItemClick={onMartianClicked} />
			</section>
			{selectedMartian && (
				<ModalWindow
					closeOnEsc={false}
					closeOnOverlayClick={false}
					isOpen={showModal}
					onClose={resetState}
				>
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
