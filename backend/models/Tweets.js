const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    text: { type: String },
    in_reply_to_status_id: { type: String },
    retweet_count: { type: Number },
    contributors: { type: String },
    created_at: { type: Date },
    geo: { type: String },
    source: { type: String },
    cordinates: { type: String },
    in_reply_to_screen_name: { type: String },
    entities: { type: Object },
    truncated: { type: Boolean },
    retweeted: { type: Boolean },
    place: { type: String },
    user: { type: Object },
    in_reply_to_user_id: { type: String },
    favorited: { type: Boolean },
    id: { type: Number },
});

module.exports = mongoose.model('tweet', tweetSchema, 'tweets');