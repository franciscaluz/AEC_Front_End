import React, { PureComponent } from 'react';
import store from 'store';
import styled from "styled-components/macro";
import { Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import isLoggedIn from './is_logged_in';

class LoginForm extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        const { history } = this.props;

        this.setState({ error: false });

        if (!(username === 'user@a.com' && password === 'a')) {
            this.setState({ error: true })
        }

        history.push('/home');
        store.set('loggedIn', true);
    }

    handleChange(input, value) {
        this.setState({
            [input]: value
        })
    }

    render() {

        /* const { error } = this.state; */

        if (isLoggedIn()) {
            return <Redirect to='/home' />
        }

        return (
            <Wrapper>
                <Form onSubmit={this.onSubmit}>
                    <fieldset>
                        <Form.Group controlId="userEmail">
                            <Form.Label>
                                Email
                                <span className='input-required'> *</span>
                            </Form.Label>
                            <Form.Control type="email"
                                placeholder="email@user.com"
                                name='username'
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="userPassword">
                            <Form.Label>
                                Mot de passe
                                <span className='input-required'> *</span>
                            </Form.Label>
                            <Form.Control type="password"
                                placeholder="Mot de passe"
                                name='password'
                                onChange={this.handleChange}
                                required />
                        </Form.Group>
                        {this.state.error && <Form.Control.Feedback>
                            Votre adresse et mot de passe sont incorrects.
                        </Form.Control.Feedback>}
                    </fieldset>
                    <Button variant="primary" type="submit" block>
                        Connexion
                    </Button>
                </Form>
            </Wrapper >
        )
    }
}

export default LoginForm;
const Wrapper = styled.div``