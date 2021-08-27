import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function Player({audioRef, songs, isPlaying, setIsPlaying, songTimer, setSongTimer, currentSong, setCurrentSong}) {
    
    // variables
    const animationPercentage = (songTimer.currentTime / songTimer.duration) * 100;
    const trackAnimation = {transform: `translateX(${animationPercentage}%)`}

    // functions
    const getTime = (time) => {
        return(Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2))
    }

    // event handlers
    const playSong = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(false)}
        else{
            audioRef.current.play();
            setIsPlaying(true)}
    }

    const dragBar = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongTimer({...songTimer, currentTime: e.target.value})
    }

    const skipTrack = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + direction + songs.length) % songs.length]);
        if(isPlaying){audioRef.current.play()}
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songTimer.currentTime)}</p>
                <div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
                    <input type="range" value={songTimer.currentTime} onChange={dragBar} min={0} max={songTimer.duration || 0}/>
                    <div className="animate-track" style={trackAnimation}></div>
                </div>
                <p>{getTime(songTimer.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="skip-back" onClick={() => skipTrack(-1)} size="3x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" onClick={playSong} size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward" onClick={() => skipTrack(1)} size="3x" icon={faAngleRight}/>
            </div>

        </div>
    )
}