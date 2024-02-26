import { Card, Col, Image } from "react-bootstrap";
import star from '../../assets/images/star.png'
import '../../assets/css/components/Devices.css'

const DeviceItem = ({device}) => {
  return (
    <Col md='3'>
        <Card className="device-item">
            <Image className="device-item__img" src={device.img}/>
            <div className="d-flex justify-content-between align-items-center device-item__bottom">
                <p className="mb-0">Sams</p>
                <div className="d-flex align-items-center">
                    <div>{device.rating}</div>
                    <Image src={star}/>
                </div>
            </div>
            <div >{device.name}</div>
        </Card>
    </Col>
  )
};

export default DeviceItem;