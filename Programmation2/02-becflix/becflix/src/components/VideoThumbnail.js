import React, { PureComponent } from 'react';
import styled from 'styled-components/macro'
import showImage from '../assets/show.jpg'
//import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class VideoSingle extends PureComponent {

    render() {
        
        return (
            <Wrapper className='col'>
                <a href='video-single'>
                    <div class="card">
                        <img src={showImage} class="card-img-top" alt="show"/>
                        <div class="card-body">
                            <h5 class="card-title">Titre de Film</h5>
                        </div>
                    </div>
                </a>
            </Wrapper>
        )
    }
}


export default VideoSingle;

const Wrapper = styled.div`
margin-bottom: 30px;

`
