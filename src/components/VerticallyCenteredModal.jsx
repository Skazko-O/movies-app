import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function VerticallyCenteredModal({ show, onHide, title, overview, date }) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{overview}</p>
        <p><b>Release date:</b> {date}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticallyCenteredModal;
