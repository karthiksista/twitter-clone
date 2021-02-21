import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from './Theme'
// import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import retweet from '../Icons/retweet.svg'
import { Button } from '@material-ui/core';
import { FormatColorTextTwoTone } from '@material-ui/icons';
const useStyles = makeStyles({
    input: {
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid rgb(241, 241, 241)',
        width: '267%',
        height: '120px'
    },
    inputLight: {
        color: "black",
        backgroundColor: 'white',
        border: '1px solid rgb(241, 241, 241)',
        width: '267%',
        height: '120px'
    }
});

function TweetTextArea() {
    const { theme, toggle, dark } = React.useContext(ThemeContext)

    const classes = useStyles()
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>

                <TextField
                    id="outlined-textarea"
                    placeholder="What's happening?"
                    multiline
                    variant="outlined"
                    InputProps={{
                        className: dark ? classes.input : classes.inputLight
                    }}
                />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>

                <Button style={{
                    borderRadius: 35,
                    backgroundColor: '#0099FF',
                    padding: "8px 15px",
                    fontSize: "18px",
                    color: 'white',
                    margin: '10px'
                }}
                    className='tweet-button' variant="contained" >
                    <span className='tweet-text'>
                        Tweet
                </span>
                </Button>
            </div>
        </div>
    )
}

export default TweetTextArea
