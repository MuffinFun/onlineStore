import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../App.jsx";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem.jsx";

const DeviceList = observer(() => {
    const {devices} = useContext(Context)
  return (
    <Row className="d-flex device-list">
      {devices.devices.map(device=>
            <DeviceItem key={device.id} device={device}/>
        )}
    </Row>
  )
});

export default DeviceList;