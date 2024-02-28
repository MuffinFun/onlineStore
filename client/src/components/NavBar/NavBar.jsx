import '../../assets/css/components/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { Context } from "../../main.jsx";
import {NavLink, useNavigate} from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts.js';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() =>{

    const history = useNavigate()

    const {user} = useContext(Context)

    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <NavLink className='nav-bar__link' to={SHOP_ROUTE}>KupiDeviseGad</NavLink>
            
            {user.isAuth ? 
            <Nav className="ml-auto">
                <Button 
                    className='nav-bar__btn'
                    onClick={()=>history(ADMIN_ROUTE)}
                >
                    Admin</Button>
                <Button 
                    className='nav-bar__btn'
                    onClick={()=>logOut()} 
                >
                    LogOut</Button>
            </Nav> 
            :
            <Nav className="ml-auto">
                <Button className='nav-bar__btn' onClick={()=>history(LOGIN_ROUTE)}>Authorization</Button>
            </Nav>}       
        </Container>
        </Navbar>
    </>
    )
})

export default NavBar;