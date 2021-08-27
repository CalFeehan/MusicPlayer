import React, { useRef, useState } from 'react'

import './styles/app.scss'

import data from './data'

import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'

export default function App() {
  // variables
  const audioRef = useRef(null);

  // states
  const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0,})
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)

  //event handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration || 0;
    setSongInfo({...songInfo, currentTime: current, duration: duration})
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) || songs[0]])
    if(isPlaying){audioRef.current.play()}
  }
  

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav 
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}/>

      <Song 
      isPlaying={isPlaying}
      currentSong={currentSong}/>
      
      <Player 
      setCurrentSong={setCurrentSong}
      songs={songs}
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}/>

      <Library 
      libraryStatus={libraryStatus}
      currentSong={currentSong}
      setSongs={setSongs}
      isPlaying={isPlaying}
      audioRef={audioRef}
      songs={songs} 
      setCurrentSong={setCurrentSong}/>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onEnded={songEndHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}