const express = require('express');
const router = express.Router();
const path = require("path");
const newFriends = require('../data/friends')

//Home Route
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Survey Route
router.get('/survey', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

let friendsScore = newFriends.map(x=>{
    return x.scores.reduce((tV, cV)=>{
        return tV + cV;
    });
});


router.post('/survey', (req, res)=>{

    let userScore = req.body.score;

    
    let scoreDifference = friendsScore.map((x, index)=>{
        return Math.abs(x - userScore);
    });
    
    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };
    
    let minVal = Array.min(scoreDifference);
    
    let lowestIndex = scoreDifference.indexOf(minVal);
    
    
    let selectedFriend = newFriends[lowestIndex];

    res.json(selectedFriend);
    
    
});






module.exports = router;