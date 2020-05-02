import React, { PureComponent } from 'react';
import BaseScreen from './BaseScreen';
import VideoSingle from '../components/VideoSingle';


class VideoSingleScreen extends PureComponent {

    render() {
        return (
            <BaseScreen>
               <VideoSingle/>
            </BaseScreen>

        )
    }
}

export default VideoSingleScreen;