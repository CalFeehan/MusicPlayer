import React from 'react'

export default function LibrarySong({audioRef, song, isPlaying, currentSong, setCurrentSong}) {

    // event handlers
    const selectSong = async () => {
        await setCurrentSong(song);
        if(isPlaying){audioRef.current.play()}
    }

    return(
        <div className={`library-song ${song.id === currentSong.id ? 'selected' : ""}`} onClick={selectSong}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}