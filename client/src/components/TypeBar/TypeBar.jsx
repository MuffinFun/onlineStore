import { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { ListGroup } from 'react-bootstrap';
import { Context } from '../../App.jsx';
import '../../assets/css/components/BarStyles.css'

const TypeBar = observer(() => {

  const {devices} = useContext(Context)

  return (
    <ListGroup className='mt-3'>
        {devices.types.map((type)=>
            <ListGroup.Item
                className='bar-btn' 
                active={type.id === devices.selectedType.id}
                onClick={()=>devices.setSelectedType(type)}
                key={type.id}
            >
                {type.name}
            </ListGroup.Item>)}
  </ListGroup>
  );
});

export default TypeBar;
