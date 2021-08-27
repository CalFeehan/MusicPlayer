import React from 'react'

export default function LibrarySong({song, songs, setCurrentSong, isPlaying, setSongs, currentSong, audioRef}) {

    // event handlers
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        if(isPlaying){audioRef.current.play()}
    }

    return(
        <div className={`library-song ${song.id === currentSong.id ? 'selected' : ""}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}