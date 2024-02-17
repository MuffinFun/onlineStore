import '../assets/css/pages/auth.css'
import {Container, Card, Form, Button, Row} from "react-bootstrap";
import {NavLink, useLocation} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = ()=> {
  const Location = useLocation()

  const isLogin = Location.pathname === LOGIN_ROUTE;

  return (
  <>
    <Container className="d-flex justify-content-center align-items-center auth-container">
      <Card className='p-5 auth-container__card'>
        <h2 className='m-auto'>{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='input your Email...'
          />
          <Form.Control
            className='mt-3'
            placeholder='input your Password...'
          />
          <Row className='d-flex justify-content-between align-items-center mt-3 pl-3 pr-3'>
            {isLogin ? 
            <div className='auth-form__row-reg'>
              Don't have an Accout? <NavLink to={REGISTRATION_ROUTE}>Registration!</NavLink>
            </div>
            :
            <div className='auth-form__row-reg'>
              Already have an Accout? <NavLink to={LOGIN_ROUTE}>LogIn!</NavLink>
            </div>
            }
            <Button className="auth-form__btn" variant={"outline-success"}>
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  </>
  );
}

export default Auth;
