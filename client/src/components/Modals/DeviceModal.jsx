import { useContext, useState, useEffect } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../main.jsx";
import { fetchTypes, fetchBrands, createDevice } from "../../http/deviceAPI.js";
import { observer } from "mobx-react-lite";

const DeviceModal = observer(({show, onHide}) => {
  const {devices} = useContext(Context) 

  const [name,setName] = useState('')
  const [price,setPrice] = useState(0)
  const [file,setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(()=>{
    fetchTypes().then(data=>devices.setTypes(data))
    fetchBrands().then(data=>devices.setBrands(data))
  },[])

  const addInfo = ()=>{
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const deleteInfo = (number)=>{
    setInfo(info.filter(i=> i.number !== number))
  }
  
  const selectFile = e =>{
    setFile(e.target.files[0])
  }
  
  const changeInfo = (key, value, number) =>{
    setInfo(info.map(i=> i.number === number ? {...i, [key]: value} : i))
  }

  const addDevice = () =>{
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', devices.selectedBrand.id)
    formData.append('typeId', devices.selectedType.id)
    formData.append('info', JSON.stringify(info))

    console.log(formData)
    createDevice(formData).then(data => onHide())

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
              <Dropdown.Toggle>{devices.selectedType.name || 'Chose Type'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {devices.types.map(type=>
                    <Dropdown.Item 
                      key={type.id}
                      onClick={()=>devices.setSelectedType(type)}
                    >
                      {type.name}
                    </Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3 mb-3">
              <Dropdown.Toggle>{devices.selectedBrand.name || 'Chose Brand'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {devices.brands.map(brand=>
                    <Dropdown.Item 
                      key={brand.id}
                      onClick={()=>devices.setSelectedBrand(brand)}
                    >
                      {brand.name}
                    </Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="mt-3"
              value={name}
              onChange={e=>setName(e.target.value)}
              placeholder="Input new Device name"
            />
            <Form.Control
              className="mt-3"
              placeholder="Input Device price"
              value={price}
              onChange={e=>setPrice(+e.target.value)}
              type="number"
            />
            <Form.Control
              className="mt-3"
              placeholder="Input Device img"
              onChange={selectFile}
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
            {info.map(i =>
                <Row className="mt-2" key={i.number}>
                  <Col md='4'>
                    <Form.Control
                      className="mt-2"
                      value={i.title}
                      onChange={(e)=>changeInfo('title', e.target.value, i.number)}
                      placeholder="input title"
                    />
                  </Col>
                  <Col md='4'>
                  <Form.Control
                      className="mt-2"
                      value={i.description}
                      onChange={(e)=>changeInfo('description', e.target.value, i.number)}
                      placeholder="input description"
                    />
                  </Col>
                  <Col md='4'>
                    <Button 
                      className="mt-2"
                      variant="outline-danger"
                      onClick={()=>deleteInfo(i.number)}
                    >
                      Delete info line</Button>
                  </Col>
                </Row>
              )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
});

export default DeviceModal;