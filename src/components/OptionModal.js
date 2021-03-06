import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleDeleteSelectOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"> 
        <h3 className="Modal__title">Selected Option</h3>
        {props.selectedOption && <p className="Modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleDeleteSelectOption}>Okay</button>
    </Modal>
);

export default OptionModal;