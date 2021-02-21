import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from './Theme'
// import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import retweet from '../Icons/retweet.svg'
const useStyles = makeStyles({
    input: {
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid #f1f1f1',
        top: '60px',
        width: '267%',
        height: '120px'
    },
    inputLight: {
        color: "black",
        backgroundColor: 'white',
        border: '1px solid #f1f1f1',
        top: '60px',
        width: '267%',
        height: '120px'
    }
});

function TweetTextArea() {
    const { theme, toggle, dark } = React.useContext(ThemeContext)

    const classes = useStyles()
    return (
        <div>
            <TextField
                id="outlined-textarea"
                placeholder="What's happening?"
                multiline
                variant="outlined"
                InputProps={{
                    className: dark ? classes.input : classes.inputLight
                }}
            />
            <img src={retweet} />
        </div>
    )
}

export default TweetTextArea
