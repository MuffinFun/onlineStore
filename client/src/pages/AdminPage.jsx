import {Container, Button} from 'react-bootstrap'
import TypeModal from '../components/Modals/TypeModal.jsx';
import BrandModal from '../components/Modals/BrandModal.jsx';
import DeviceModal from '../components/Modals/DeviceModal.jsx'
import { useState } from 'react';

const AdminPage = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  return (
    <Container className='d-flex flex-column'>
      <Button 
        variant={"outline-dark"} 
        className='mt-4 p-3'
        onClick={()=>setTypeVisible(true)}
      >
         Add Type</Button>
      <Button 
        variant={"outline-dark"} 
        className='mt-4 p-3'
        onClick={()=>setBrandVisible(true)}
      >
         Add Brand</Button>
      <Button 
        variant={"outline-dark"} 
        className='mt-4 p-3'
        onClick={()=>setDeviceVisible(true)}
      >
         Add Device</Button>

      <TypeModal show={typeVisible} onHide={()=>setTypeVisible(false)}/>
      <BrandModal show={brandVisible} onHide={()=> setBrandVisible(false)}/>
      <DeviceModal show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>

    </Container>
  )
};

export default AdminPage