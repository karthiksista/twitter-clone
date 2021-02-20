import React, { useState } from 'react'
import twitter from '../Icons/twitter.svg'
import homeLight from '../Icons/home-light.svg'
import homeDark from '../Icons/home-dark.svg'
import hashtag from '../Icons/hash.svg'
import moon from '../Icons/moon.svg'
import sun from '../Icons/sun.svg'
import UserDark from '../Icons/user-dark-theme.svg'
import UserWhite from '../Icons/user-white-theme.svg'
import Button from '@material-ui/core/Button';

function SideNav({ dark, toggle }) {

    const [homeColor, setHomeColor] = useState('')
    const [exploreColor, setExploreColor] = useState('')
    const [profileColor, setProfileColor] = useState('')

    const hoverStylesHome = {
        color: homeColor,
        cursor: 'pointer'
    }

    const hoverStylesExplore = {
        color: exploreColor,
        cursor: 'pointer'
    }

    const hoverStylesProfile = {
        color: profileColor,
        cursor: 'pointer'
    }

    return (
        <div className='nav-section'>
            <div className='nav-container'>
                <div className='home'>
                    <img className='twit-logo' src={twitter} alt="twitter-logo" />
                </div>
                <div className='home' style={hoverStylesHome} onMouseEnter={() => setHomeColor('rgb(29, 161, 242)')} onMouseLeave={() => setHomeColor('')} >
                    <div className='logo-style'>
                        <img src={!dark ? homeDark : homeLight} alt="home-logo" />
                    </div>
                    <div className='home-text'>
                        <span > Home </span>
                    </div>
                </div>
                <div style={hoverStylesExplore} className='home' onMouseEnter={() => setExploreColor('rgb(29, 161, 242)')} onMouseLeave={() => setExploreColor('')}>
                    <div className='logo-style'>
                        <img src={!dark ? hashtag : hashtag} alt="home-logo" />
                    </div>
                    <div className='home-text'>
                        <span> Explore </span>
                    </div>
                </div>
                <div style={hoverStylesProfile} className='home' onMouseEnter={() => setProfileColor('rgb(29, 161, 242)')} onMouseLeave={() => setProfileColor('')}>
                    <div className='logo-style'>
                        <img src={!dark ? UserWhite : UserDark} alt="home-logo" />
                    </div>
                    <div className='home-text'>
                        <span> Profile </span>
                    </div>
                </div>
                <div className='home'>
                    <div className='logo-style'>
                        <img
                            className='dark-mode-button'
                            type="button"
                            onClick={toggle}
                            src={!dark ? moon : sun}
                        />
                    </div>
                </div>
                <div className='home'>
                    <Button style={{
                        borderRadius: 35,
                        backgroundColor: '#0099FF',
                        padding: "12px 100px",
                        fontSize: "18px",
                        color: 'white'
                    }}
                        className='tweet-button' variant="contained" >
                        <span className='tweet-text'>
                            Tweet
                </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SideNav
