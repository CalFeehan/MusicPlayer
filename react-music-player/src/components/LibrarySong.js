import React from 'react'
import {playAudio} from '../util.js'

export default function LibrarySong({song, songs, setCurrentSong, isPlaying, setSongs, currentSong, audioRef}) {

    // event handlers
    const songSelectHandler = () => {
        setCurrentSong(song);
        playAudio(isPlaying, audioRef)
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