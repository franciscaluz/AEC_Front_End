import React, { PureComponent } from 'react';
import BaseScreen from './BaseScreen';
import { Jumbotron, Button } from 'react-bootstrap'
import VideoThumbnail from '../components/VideoThumbnail'

class HomepageScreen extends PureComponent {

    render() {


        const categories = ['suspens', 'drame', 'comedie', 'action', 'Romance', 'Documentaire'];
        const tvShowsList = [];
        for (var i=0; i < 6; i++) {
            tvShowsList.push(<VideoThumbnail/>)
        } 

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
                
                {categories.map((value, index) => {
                    return <section>
                        <h1 key={index}>{value}</h1>
                        <div class="row row-cols-1 row-cols-sm-3  row-cols-xl-6 ">
                        {tvShowsList}
                        </div>
                        </section>
                })}               
                
            </BaseScreen>

        )
    }
}

export default HomepageScreen;