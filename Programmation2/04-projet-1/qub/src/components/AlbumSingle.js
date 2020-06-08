import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';
import styled from "styled-components/macro";
import { albums } from '../constant';
import { Button } from "react-bootstrap";
import { ReactComponent as Like } from "../assets/icn-like.svg";
import { ReactComponent as More } from "../assets/icn-more.svg";
import { ReactComponent as See } from "../assets/icn-see.svg";
import { ReactComponent as SeeNot } from "../assets/icn-see-not.svg";

class AlbumSingle extends PureComponent {
  render() {
    const albumMatch = this.props
    const { id, idTitle, trackList } = albumMatch

    return (
      <Wrapper >
        <div className="tracklist-header">
          <Link to="#" className="btn btn-primary">Lecture</Link>
          <Link to="#" className="btn btn-icon btn-icon-outline-primary"><Like /></Link>
          <Link to="#" className="btn btn-icon btn-icon-outline-primary"><More /></Link>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Titre</th>
                <th scope="col">Paroles</th>
              </tr>
            </thead>
            <tbody>
              {trackList.map(({ song, lyrics }, index) => (
                <tr key={song}>
                  <th scope="row">{index + 1}</th>
                  <td>{song}</td>
                  <td>
                    {lyrics.length ? (
                      <Link to={`/albums/${id}/${idTitle}/${song}`} className="btn btn-icon btn-icon-primary"><See /></Link>
                    ) : (
                        <Button className='btn btn-icon disabled'><SeeNot /></Button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper >
    );
  }
}


export default withRouter(AlbumSingle)

const Wrapper = styled.div``
