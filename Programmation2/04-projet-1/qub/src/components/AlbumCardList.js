import React, { PureComponent } from "react";
import styled from "styled-components/macro";
import { albums } from "../constant"
import AlbumCardSingle from "./AlbumCardSingle";

class AlbumCardList extends PureComponent {

  render() {
    const { search } = this.props
    const AlbumList = albums.map((item, index) => {
      const artist = item.name.toLowerCase()
      const title = item.title.toLowerCase()
      const normalizedSearch = search.toLowerCase()

      if (artist.includes(normalizedSearch) || title.includes(normalizedSearch)) {
        return (
          <AlbumCardSingle key={index}
            id={item.id}
            idTitle={item.idTitle}
            name={item.name}
            title={item.title}
            background={item.background}
          />
        )
      }
    })

    return (
      <Wrapper className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" id='employee-list'>
        {AlbumList}
      </Wrapper>
    )
  }
}

export default AlbumCardList;
const Wrapper = styled.div``
