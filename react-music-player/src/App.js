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
  const updateTime = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration || 0;
    setSongInfo({...songInfo, currentTime: current, duration: duration})
  }

  const endSong = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1)] || songs[0]);
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
      isPlaying={isPlaying}
      audioRef={audioRef}
      songs={songs} 
      setCurrentSong={setCurrentSong}/>
      <audio onTimeUpdate={updateTime} onLoadedMetadata={updateTime} onEnded={endSong} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}