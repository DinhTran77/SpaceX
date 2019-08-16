import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App';
import style from './Hero.module.css';
import videoPosterURL from '../../Images/rocket.jpg';
import videoMp4 from '../../Images/video.mp4';
import videoWebm from '../../Images/videoWebm.webm';
import videoOgv from '../../Images/video.ogv';


const Hero = () => {
    return (
        <React.Fragment>
            <section className={style.videoContainer}>
                <h1>Space X News</h1>
                <div className={style.overlay}></div>
                <video className={style.video} muted loop autoPlay poster={videoPosterURL}>                
                    <source src={videoMp4} type="video/mp4"></source>
                    <source src={videoOgv} type="video/ogg"></source>
                    <source src={videoWebm} type='video/webm'></source>
                    Your browser does not support the video tag.
                </video>
            </section>
        </React.Fragment>
    )
}

export default Hero
