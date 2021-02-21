import { Card } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from './Theme'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { blue, grey, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import comment from '../Icons/comment_black.svg'
import love from '../Icons/love-black.svg'
import retweet from '../Icons/retweet.svg'
import upload from '../Icons/Upload_black.svg'




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgb(241, 241, 241);'
    },
    darkRoot: {
        width: '100%',
        backgroundColor: '#000000',
        border: '1px solid gray'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    avatar: {
        backgroundColor: blue[500],
        paddingRight: '0px'
    },
    darkThemeColor: {
        color: blue[800]
    },
    whiteThemeColor: {
        color: grey[900]
    }
}));
// {dark ? classes.darkThemeColor : classes.whiteThemeColor}

const TweetCard = ({ tweets }) => {
    const { theme, toggle, dark } = React.useContext(ThemeContext)
    const [loveColor, setLoveColor] = useState('')
    const hoverStylesLove = {
        fill: loveColor,
        cursor: 'pointer'
    }
    const classes = useStyles()
    console.log(tweets)
    return (
        <>
            {tweets.map((tweet) => {
                return (
                    <div className='tweet-card'>
                        <Card className={!dark ? classes.root : classes.darkRoot}>
                            <div className='card-head-container'>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            {tweet.user.name.split('')[0]}
                                        </Avatar>
                                    } />
                                <div style={{ color: dark ? 'white' : 'black', fontWeight: 'bolder' }} className='user-name'>
                                    {tweet.user.name}
                                </div>

                                <div style={{ color: 'gray' }} className='user-name-handle'>
                                    @{tweet.user.screen_name}
                                </div>

                            </div>
                            <CardContent>
                                <div className='card-content'>
                                    <div className='tweet-text-wrap'>
                                        <p style={{ color: dark ? 'white' : 'black' }}>
                                            {tweet.text}
                                        </p>
                                    </div>
                                    <div className='tweet-actions-container' style={{ color: dark ? 'white' : 'black' }}>
                                        <div className='tweet-actions' style={{ color: dark ? 'white' : 'black' }}>
                                            <img src={comment} style={{ height: '34px', width: '34px' }} />
                                        </div>
                                        <div onMouseEnter={() => setLoveColor('red')} className='tweet-actions' style={hoverStylesLove}>
                                            <img className='love' style={{ height: '34px', width: '34px' }} src={love} />
                                        </div>
                                        <div className='tweet-actions' style={{ color: dark ? 'white' : 'black' }}>
                                            <img className='retweet' style={{ height: '34px', width: '34px' }} src={retweet} />


                                        </div>
                                        <div className='tweet-actions' style={{ color: dark ? 'white' : 'black' }}>
                                            <img className='upload' style={{ height: '34px', width: '34px' }} src={upload} />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )
            })}
        </>
    )
}

export default TweetCard
