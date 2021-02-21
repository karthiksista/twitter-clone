import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StickyHome from './StickyHome'
import TweetCard from './TweetCard'
import TweetTextArea from './TweetTextArea'

// import Tweets from '../../backend/models/Tweets'

function TweetsSection() {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/tweets')
            .then(res => {
                console.log(res.data)
                setTweets(res.data)
            }, err => {
                console.log(err, 'ERR')
            })
    }, [])
    console.log(tweets, '$$$$$$$$$$$$$$')
    return (
        <div className='tweet-container'>
            <StickyHome />
            <div className='tweets-list'>
                <TweetTextArea />
            </div>
            <TweetCard tweets={tweets} />

        </div>
    )
}

export default TweetsSection
