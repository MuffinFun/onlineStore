import '../assets/css/pages/DevicePage.css'
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";

const DevicePage = () => {
  const device = {
        id: 3,
        name: 'Iphone 13 pro',
        price: 12000,
        rating: 5,
        img: 'https://shop.mts.by/upload/resize_cache/webp/iblock/798/Smartfon-Apple-iPhone-13-128GB-_rozovyy_.webp',
      }

      const description = [
        {id: 1, title: 'RAM', description: '6gb'},
        {id: 2, title: 'Display', description: 'Oled'},
        {id: 3, title: 'Camera', description: '12mp'},
        {id: 4, title: 'Cores', description: 'Intel Core i3'},
        {id: 5, title: 'Battery', description: '6000ma'},
      ]

  return (
    <Container className='device-info'>
      <Row>
        <Col md={4}>
          <Image src={device.img} className='device-info__img'/>
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
        {description.map((info,ind)=>
            <Row key={info.id} className={`device-info__info ${ind % 2 === 0 ? 'device-info__info_lightgray': 'device-info__info_transparent'}`}>
              {info.title}: {info.description}
            </Row>
          )}
      </Row>
    </Container>
  )
};

export default DevicePage;