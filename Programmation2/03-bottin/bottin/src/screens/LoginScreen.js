import React, { PureComponent } from 'react';
import styled from "styled-components/macro";
import { Row, Col } from "react-bootstrap";
import LoginForm from '../components/login-form';
import Logo from '../assets/logo-random.svg';


class LoginScreen extends PureComponent {

    render() {
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <div className='auth-inner'>
                        <Row noGutters>
                            <Col sm={6}>
                                <div className='content-left'>
                                    <img src={Logo} alt="logo" className="img-fluid" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className='content-right'>
                                    <h1>Connexion</h1>
                                    <LoginForm />
                                    <div className='form-link-wrapper'>
                                        <a href='/' className='primary-link'>Mot de passe oublié?</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Wrapper>

        )
    }
}

export default LoginScreen;
const Wrapper = styled.div`
background-color: #19172e;
height:100vh;

.auth-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-right: 15px;
    padding-left:15px;
}

.auth-inner {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    border-radius: 7.5px;
    overflow: hidden;
}

.content-left {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    background-color: #272447;
    img {
        height:200px;
    }
}

.content-right {
    padding: 50px;
    background: #ffffff;

    form {
        margin-bottom: 15px;
    }

    .form-link-wrapper {
        text-align: center;
    }
}
@media (max-width : 991.98px){
    .content-left img {
        height: 150px;
    }
}

@media (max-width: 575.98px) {
    .auth-wrapper {
        padding-top: 30px;
        align-items: flex-start;
    }


    .content-right h1 {
        text-align: center;
    }
    .content-left {
        padding: 15px;
        img {
            height: auto;
            max-width: 100%
        }
    }   
}

`