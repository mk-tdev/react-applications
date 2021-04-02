import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const OptionModal = ({ selectedOption, handleCloseModal }) => {
  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={handleCloseModal}
      className="app-modal"
    >
      <h3>Selected Option</h3>

      <h4>{selectedOption}</h4>

      <button onClick={handleCloseModal}>Close</button>
    </Modal>
  );
};

export default OptionModal;
