import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs, setCurrentSong, audioRef, isPlaying, currentSong, libraryStatus}) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                <LibrarySong 
                currentSong={currentSong}
                isPlaying={isPlaying}
                audioRef={audioRef}
                setCurrentSong={setCurrentSong} 
                song={song}
                key={song.id}/>
                ))}
            </div>
        </div>
    )
}
