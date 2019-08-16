import React from 'react'
import style from './NavBar.module.css'
import logo from '../../Images/SpaceX_logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className={style.navBarContainer}>                            
                <div className={style.logoContainer}>
                    <img className={style.logo} src={logo} alt="SpaceX logo"/>
                </div>   
                <ul className={style.navBar}>
                    
                    <li><Link to='/'>History</Link></li>
                    <li><Link to='/rockets'>Rockets</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>   
            </nav>
    </React.Fragment>
    )
}

export default NavBar
