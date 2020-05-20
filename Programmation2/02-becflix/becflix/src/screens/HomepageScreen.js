import React, { PureComponent } from 'react';
import BaseScreen from './BaseScreen';
import { Jumbotron, Button } from 'react-bootstrap'
import VideoThumbnail from '../components/VideoThumbnail'
import VideoList from '../components/VideoList';

class HomepageScreen extends PureComponent {

    render() {

        return (
            <BaseScreen>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                
                <VideoList/>
                
            </BaseScreen>

        )
    }
}

export default HomepageScreen;