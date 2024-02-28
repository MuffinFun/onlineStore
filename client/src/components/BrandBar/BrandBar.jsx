import { observer } from "mobx-react-lite";
import { Context } from "../../main.jsx";
import { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import '../../assets/css/components/BarStyles.css'

const BrandBar = observer(() => {
    const {devices} = useContext(Context)
  return (
    <Row className="d-flex">
            {devices.brands.map((brand)=>
                <Card 
                    key={brand.id} 
                    onClick={()=>devices.setSelectedBrand(brand)}
                    className="p-2 mt-3 bar-btn brand-bar__item"
                    border={brand.id === devices.selectedBrand.id ? 'danger': 'black'}
                >
                    {brand.name}
                </Card>
            )}
    </Row>
  )
});

export default BrandBar;
