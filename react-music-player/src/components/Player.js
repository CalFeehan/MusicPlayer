import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function Player({currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs, setCurrentSong}) {
    
    // variables
    const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;
    const trackAnimation = {transform: `translateX(${animationPercentage}%)`}

    // functions
    const getTime = (time) => {
        return(Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2))
    }

    // event handlers
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(false)}
        else{
            audioRef.current.play();
            setIsPlaying(true)}
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + direction + songs.length) % songs.length]);
        if(isPlaying){audioRef.current.play()}
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
                    <input type="range" value={songInfo.currentTime} onChange={dragHandler} min={0} max={songInfo.duration || 0}/>
                    <div className="animate-track" style={trackAnimation}></div>
                </div>
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="skip-back" onClick={() => skipTrackHandler(-1)} size="3x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward" onClick={() => skipTrackHandler(1)} size="3x" icon={faAngleRight}/>
            </div>

        </div>
    )
}