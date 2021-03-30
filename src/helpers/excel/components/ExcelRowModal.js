import React, { useState } from 'react';
import './styles.css';

import Modal from 'react-modal';

Modal.setAppElement('#root');

const ExcelRowModal = ({ rowData }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  console.log('Appy Data: ', rowData);

  return (
    <div className="App">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>My modal dialog.</div>
        <div>{rowData['Link to Application']}</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};

export default ExcelRowModal;
