import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMusic} from "@fortawesome/free-solid-svg-icons"

export default function Nav({setLibraryStatus, libraryStatus}) {
    return (
        <nav className="nav">
            <h1>Music Player</h1>
            <button className="library-button" onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}
