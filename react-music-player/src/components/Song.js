import React from 'react'

export default function Song({currentSong, isPlaying}) {
    return(
        <div className="song-container">
            <img className={`${isPlaying ? "song-playing" : ""}`} src={currentSong.cover} alt={currentSong.name}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}