import { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../App.jsx";


const DeviceModal = ({show, onHide}) => {
  const {devices} = useContext(Context) 

  const [info, setInfo] = useState([])

  const addInfo = ()=>{
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const deleteInfo = (number)=>{
    setInfo(info.filter(i=> i.number !== number))
  }
  
  return (
    <Modal
    show={show}
    onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-3 mb-3">
              <Dropdown.Toggle>Chose Type</Dropdown.Toggle>
              <Dropdown.Menu>
                {devices.types.map(type=>
                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3 mb-3">
              <Dropdown.Toggle>Chose Brand</Dropdown.Toggle>
              <Dropdown.Menu>
                {devices.brands.map(brand=>
                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="mt-3"
              placeholder="Input new Device name"
            />
            <Form.Control
              className="mt-3"
              placeholder="Input Device price"
              type="number"
            />
            <Form.Control
              className="mt-3"
              placeholder="Input Device img"
              type="file"
            />

            <hr/>
            <Button
              className="mt-2"
              variant="outline-dark"
              onClick={addInfo}
            >      
              Add new Info
            </Button>
            {info.map(inf =>
                <Row className="mt-2" key={inf.number}>
                  <Col md='4'>
                    <Form.Control
                      className="mt-2"
                      placeholder="input title"
                    />
                  </Col>
                  <Col md='4'>
                  <Form.Control
                      className="mt-2"
                      placeholder="input description"
                    />
                  </Col>
                  <Col md='4'>
                    <Button 
                      className="mt-2"
                      variant="outline-danger"
                      onClick={()=>deleteInfo(inf.number)}
                    >
                      Delete info line</Button>
                  </Col>
                </Row>
              )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default DeviceModal;