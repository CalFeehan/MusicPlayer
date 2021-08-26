import React, { useRef, useState } from 'react'

import './styles/app.scss'

import data from './util'

import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'

export default function App() {
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0})
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration || 0;
    setSongInfo({...songInfo, currentTime: current, duration: duration})
}

  return (
    <div className="App">
      <Nav />
      <Song 
      currentSong={currentSong}/>
      
      <Player 
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}/>

      <Library 
      currentSong={currentSong}
      setSongs={setSongs}
      isPlaying={isPlaying}
      audioRef={audioRef}
      songs={songs} 
      setCurrentSong={setCurrentSong}/>
      <audio 
      onTimeUpdate={timeUpdateHandler} 
      onLoadedMetadata={timeUpdateHandler}
      ref={audioRef} 
      src={currentSong.audio}></audio>
    </div>
  );
}