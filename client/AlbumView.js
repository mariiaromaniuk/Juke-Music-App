import React from 'react'


export default class AlbumView extends React.Component {

  render() {
    const albums = [
      {
        "id": 1,
        "name": "No Dummy",
        "artworkUrl": "default-album.jpg",
        "artistId": 1,
        "artist": {
          "id": 1,
          "name": "The Crash Test Dummies"
        }
      },
      {
        "id": 2,
        "name": "I React to State",
        "artworkUrl": "default-album.jpg",
        "artistId": 1,
        "artist": {
          "id": 1,
          "name": "The Crash Test Dummies"
        }
      }
    ]
    const data = []

    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      data.push(
        <div className='album' key={album.id}>
          <a>
            <img src='default-album.jpg' />
            <p>{album.name}</p>
            <small>{album.artist.name}</small>
          </a>
        </div>
      )
    }
    return <div>{data}</div>
  }
}