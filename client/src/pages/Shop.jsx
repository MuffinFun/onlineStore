import {Container, Row, Col} from 'react-bootstrap'
import { useContext, useEffect } from 'react';
import TypeBar from '../components/TypeBar/TypeBar';
import BrandBar from '../components/BrandBar/BrandBar';
import DeviceList from '../components/DeviceList/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';

const Shop = observer(() => {
   
  const {devices} = useContext(Context)

  useEffect(()=>{
    fetchTypes().then(data=>devices.setTypes(data))
    fetchBrands().then(data=>devices.setBrands(data))
  },[])
  
  useEffect(()=>{
    fetchDevices(devices.selectedBrand.id, devices.selectedType.id, devices.page, 3).then(data=> {
      devices.setDevices(data.rows)
      devices.setTotalCount(data.count)
    })
  },[devices.page, devices.selectedBrand, devices.selectedType])

  return( 
  <Container>
    <Row>
      <Col md={3}>
        <TypeBar/>
      </Col>
      <Col md={9}>
        <BrandBar/>
        <DeviceList/>
        <Pages/>
      </Col>
    </Row>
  </Container>);
})

export default Shop;
