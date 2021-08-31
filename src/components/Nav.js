import React from 'react'

export default function Nav({libraryStatus, setLibraryStatus}) {
    // how to store client_id and client_secret?
    // even in .env this will be visable on front end
    // backend api call?
    const AUTH_URL = "https://accounts.spotify.com/authorize?"

    return (
        <nav className="nav">
            <button className="library-button" onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
            </button>
            <a className="spotify-button" href={AUTH_URL}>Spotify</a>
        </nav>
    )
}
