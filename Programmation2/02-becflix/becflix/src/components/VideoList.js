import React, { PureComponent } from 'react';
import styled from 'styled-components/macro'
import VideoThumbnail from '../components/VideoThumbnail'
import showImage from '../assets/show.jpg'
//import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class VideoList extends PureComponent {

    render() {
        const categories = ['Suspens', 'Humour', 'Séries américaines'];
        const tvShowsList = [];
        for (var i = 0; i < 6; i++) {
            tvShowsList.push(<VideoThumbnail />)
        }
    
        const list = categories.map((value, index) => {
                return (
                <section>
                    <h1 key={index}>{value}</h1>
                    <div class="row row-cols-1 row-cols-sm-3  row-cols-xl-6 ">
                        {tvShowsList}
                    </div>
                </section>
                )
            })
        
    
        return (
            <Wrapper>
                {list}
            </Wrapper>
        )
    }
}


export default VideoList;

const Wrapper = styled.div`
margin-bottom: 30px;

`