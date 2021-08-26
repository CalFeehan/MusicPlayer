import React from 'react'

export default function LibrarySong({song, songs, setCurrentSong, audioRef, isPlaying, setSongs, currentSong}) {

    const songSelectHandler = () => {
        setCurrentSong(song);
    }

    return(
        <div className={`library-song ${song.id ===currentSong.id ? 'selected' : ""}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}