import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import BaseScreen from "./BaseScreen";
import AlbumSingle from "../components/AlbumSingle";

class AlbumSingleScreen extends PureComponent {

  render() {
    return (
      <BaseScreen>
        <AlbumSingle />
      </BaseScreen>
    );
  }
}

export default withRouter(AlbumSingleScreen);

