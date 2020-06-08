/* import React, { PureComponent } from "react";
import { withRouter, Link } from 'react-router-dom';

class AlbumSingleTracks extends PureComponent {

    render() {
        const { trackList, id, idTitle } = this.props;

        return (
            <>
                {trackList.map(({ song, lyrics }, index) =>
                    <tr key={song}>
                        <th scope="row">{index + 1}</th>
                        <td>{song}</td>
                        <td>
                            {lyrics.length ? (
                                <Link to={`/lyrics/${id}/${idTitle}/${tracklist.song}`} className="btn btn-primary">Voir</Link>
                            ) : (
                                    <div>Non disponible</div>
                                )}
                        </td>
                    </tr >
                )}
            </>
        )
    }

}


export default AlbumSingleTracks; */