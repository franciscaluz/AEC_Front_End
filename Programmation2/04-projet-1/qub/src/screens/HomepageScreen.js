import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import BaseScreen from "./BaseScreen";
import { albums } from '../constant';
import AlbumCardList from "../components/AlbumCardList";
import FilterForm from "../components/FilterForm";
import AlbumCardSingle from "../components/AlbumCardSingle";
import { Container } from "react-bootstrap";

class HomepageScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterStr: ''
    };
  }

  render() {
    const List = this.state.albums;
    const filteredStaffList = albums.filter(albums =>
      albums.name.toLowerCase().includes(this.state.filterStr.toLowerCase())
    )
    return (
      <BaseScreen>
        <Wrapper className='directory'>
          <Container fluid>
            <div className='directory-header'>
              <h1>Albums</h1>
              <FilterForm setFilterStr={val => this.setState({ filterStr: val })} />
            </div>
            <AlbumCardList>
              {filteredStaffList.map((item, index) => (
                <AlbumCardSingle key={index}
                  name={item.name}
                  title={item.title}
                  email={item.email}
                  telephone={item.telephone}
                  address={item.address}
                />
              ))}

            </AlbumCardList>
          </Container>
        </Wrapper>
      </BaseScreen>
    );
  }
}

export default HomepageScreen;
const Wrapper = styled.div`
margin: 0 auto;

.directory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 60px;
  margin-bottom: 30px;

  h1 {
    margin-bottom: 0;
  }
}

`
