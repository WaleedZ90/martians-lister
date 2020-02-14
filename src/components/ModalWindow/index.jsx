import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import "./styles.scss";

const ModalWindow = ({
	isOpen = false,
	onClose,
	children,
	closeOnOverlayClick = true,
	closeOnEsc = true,
	center = true
}) => {
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		setModalOpen(isOpen);
	}, [isOpen]);

	return (
		<Modal
			open={modalOpen}
			onClose={onClose}
			center={center}
			blockScroll
			closeOnOverlayClick={closeOnOverlayClick}
			closeOnEsc={closeOnEsc}
			classNames={{
				modal: "modal",
				overlay: "modal-overlay",
				closeButton: "modal-closebutton",
				transitionEnter: "show-modal",
				transitionExit: "hide-modal"
			}}
		>
			<div className="modal__content">{children}</div>
		</Modal>
	);
};

export default ModalWindow;
