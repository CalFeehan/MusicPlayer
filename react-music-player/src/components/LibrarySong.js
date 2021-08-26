import React from 'react'

export default function LibrarySong({song, songs, setCurrentSong, setIsPlaying}) {

    const songSelectHandler = () => {
        setCurrentSong(song);
        setIsPlaying(false);
    }

    return(
        <div className="library-song">
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description" onClick={songSelectHandler}>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}