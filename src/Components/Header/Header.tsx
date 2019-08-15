import React from 'react'
import style from './Header.module.css';
import logo from '../../Images/SpaceX_logo.png';
import videoPosterURL from '../../Images/rocket.jpg';
import video from '../../Images/video.mp4';

const Header = () => {
    return (
        <header className={style.mainHeader}>
                <section className={style.hero}>
                        <nav className={style.navBarContainer}>
                            
                            <div className={style.logoContainer}>
                                <img className={style.logo} src={logo} alt="SpaceX logo"/>
                            </div>   
                            <ul className={style.navBar}>
                                <li><a href='#'>History</a></li>
                                <li><a href='#'>Rockets</a></li>
                                <li><a href='#'>About</a></li>
                            </ul>
                        </nav>

                        <section className={style.videoContainer}>
                            <h1>My Space X page</h1>

                            <div className={style.overlay}></div>
                            <video className={style.video} muted loop autoPlay poster={videoPosterURL}>                
                                <source src={video} type="video/mp4"></source>
                                Your browser does not support the video tag.
                            </video>
                        </section>
                </section>
        </header>
    )
}

export default Header