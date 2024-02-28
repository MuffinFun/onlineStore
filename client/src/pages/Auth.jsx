import '../assets/css/pages/auth.css'
import {Container, Card, Form, Button, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts.js';
import { login, registration } from '../http/userAPI.js';
import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main.jsx';

const Auth = observer(()=> {
  const {user} = useContext(Context)
  const Location = useLocation()
  const history = useNavigate()

  const isLogin = Location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async ()=>{
    try {
      let data;
      if(isLogin){
        data = await login(email, password)
      }else{
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      history(SHOP_ROUTE)

    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
  <>
    <Container className="d-flex justify-content-center align-items-center auth-container">
      <Card className='p-5 auth-container__card'>
        <h2 className='m-auto'>{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className='d-flex flex-column align-items-center auth-form'>
          <Form.Control
            className='mt-3'
            placeholder='input your Email...'
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='input your Password...'
            type='password'
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <Row className='d-flex justify-content-between align-items-center auth-form__bot'>
            {isLogin ? 
            <div className='auth-form__row-reg'>
              Don't have an Accout? <NavLink to={REGISTRATION_ROUTE}>Registration!</NavLink>
            </div>
            :
            <div className='auth-form__row-reg'>
              Already have an Accout? <NavLink to={LOGIN_ROUTE}>LogIn!</NavLink>
            </div>
            }
            <Button 
              className="auth-form__btn" 
              variant={"outline-success"}
              onClick={click}
            >
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  </>
  );
})

export default Auth;
