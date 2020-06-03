import React, { PureComponent } from 'react';
import styled from "styled-components/macro";
import LoginForm from '../components/login-form';
import Logo from '../assets/logo-random.svg';
import loginBackground from '../assets/login-bg.png';


class LoginScreen extends PureComponent {

    render() {
        return (
            <Wrapper>
                <div className='auth-wrapper'>
                    <div className='auth-inner'>
                        <div className='auth-content'>
                            <img src={Logo} alt="logo" className="img-fluid" />
                            <h3>Connexion</h3>
                            <LoginForm />
                            <div className='form-link-wrapper'>
                                <a href='/' className='primary-link'>Mot de passe oublié?</a>
                            </div>
                        </div>

                    </div>
                </div>
            </Wrapper>

        )
    }
}

export default LoginScreen;
const Wrapper = styled.div`
background-image: url("${loginBackground}");
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
width: 100%;
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
    max-width: 430px;
    margin: 0 auto;
    border-radius: 7.5px;
    overflow: hidden;
}

.auth-content {
    color: #ffffff;
    padding: 50px;
    text-align: center;
    background: rgba(255,255,255,0.15);

    img {
        margin-bottom: 2rem;
    }

    form {
        margin-bottom: 15px;

        fieldset {
            text-align:left;
        }
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
}

`