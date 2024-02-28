import {Container, Row, Col} from 'react-bootstrap'
import TypeBar from '../components/TypeBar/TypeBar';
import BrandBar from '../components/BrandBar/BrandBar';
import DeviceList from '../components/DeviceList/DeviceList';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from '../main';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';

const Shop = observer(() => {

  const {devices} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=>devices.setTypes(data))
    fetchBrands().then(data=>devices.setBrands(data))
    fetchDevices().then(data=> devices.setDevices(data.rows))
  },[])

  return( 
  <Container>
    <Row>
      <Col md={3}>
        <TypeBar/>
      </Col>
      <Col md={9}>
        <BrandBar/>
        <DeviceList/>
      </Col>
    </Row>
  </Container>);
})

export default Shop;
