import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs, setCurrentSong, setIsPlaying}) {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                <LibrarySong 
                setIsPlaying={setIsPlaying}
                setCurrentSong={setCurrentSong} 
                songs={songs}
                song={song}
                key={song.id}/>
                ))}
            </div>
        </div>
    )
}
