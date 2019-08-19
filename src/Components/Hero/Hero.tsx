import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App';
import '../../CSS/reset.css'
import style from './Hero.module.css';
import videoPosterURL from '../../Images/rocket.jpg';
import videoMp4 from '../../Images/video.mp4';
import videoWebm from '../../Images/videoWebm.webm';
import videoOgv from '../../Images/video.ogv';
import loadingGif from '../../Images/Loading.gif'
import Loading from '../Loading/Loading';

const Hero = (props:any) => {
    return (
        <React.Fragment>
            <section className={style.heroContainer}>
                <h1>Space X News</h1>
                
                <Loading isLoading={props.isLoading}></Loading>
                <div className={style.overlay}></div>

                <video controls className={style.video} muted loop autoPlay poster={videoPosterURL}>                
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
