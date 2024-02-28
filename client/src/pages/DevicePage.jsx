import '../assets/css/pages/DevicePage.css'
import { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = () => {

  const [device, setDevice] = useState({info:[]})

  const {id} = useParams()

  useEffect(()=>{
    fetchOneDevice(id).then(data=>setDevice(data))

  },[])

  return (
    <Container className='device-info'>
      <Row>
        <Col md={4}>
          <Image src={import.meta.env.VITE_API_URL + device.img} className='device-info__img'/>
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex justify-content-center align-items-center device-info__rating'
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex flex-column justify-content-around align-items-center device-info__card'>
            <h3>$ - {device.price}</h3>
            <Button variant="outline-dark">Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column mt-3'>
        <h1>ADDITIONAL INFO</h1>
        {device.info.map((info,ind)=>
            <Row key={info.id} className={`device-info__info ${ind % 2 === 0 ? 'device-info__info_lightgray': 'device-info__info_transparent'}`}>
              {info.title}: {info.description}
            </Row>
          )}
      </Row>
    </Container>
  )
};

export default DevicePage;