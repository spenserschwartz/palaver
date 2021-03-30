import React, { useState } from 'react';
import './styles.css';

import Modal from 'react-modal';

Modal.setAppElement('#root');

const ExcelRowModal = ({ rowData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const companyName = rowData['Company Name'];
  const status = rowData['Status'];
  const jobTitle = rowData['Job Title'];

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
        <h4>{`${companyName}: ${rowData['Job Title']}`}</h4>
        <div>{rowData['Link to Application']}</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};

export default ExcelRowModal;
