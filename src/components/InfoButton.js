import React,{useState} from "react";
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>지도</h4>
        <p>
          지도지도지됮됮되조디조디조디조디조딪되조디조지도지도지됮도지도지도지도
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function InfoButton() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Badge pill variant="info" onClick={()=>setModalShow(true)} style={{cursor: 'pointer'}}>
        Info
      </Badge>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default InfoButton;