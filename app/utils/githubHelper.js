var axios = require('axios');
var id = "YOUR_CLIEND_ID";
var secret = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + secret ;

function getUserInfo (username){    
    return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username){
    return axios.get('https://api.github.com/users/'+username+'/repos'+param+'&per_page=100');
}

function getTotalStars(repos){
    return repos.data.reduce(function(prev,current){
        return prev + current.stargazers_count
    },0)
}

function getPlayerData(player){
    return getRepos(player.login).then(getTotalStars).then(function(totalStars){
        return {
            followers:player.followers,
            totalStars:totalStars
        }
    })
}

function calculateScores(player){
    return [
        player[0].followers*3+player[0].totalStars,player[1].followers*3 + player[1].totalStars
    ]
}

var helper = {
    getPlayersInfo:function (players) {
        return axios.all(players.map(function(username){
            return getUserInfo(username)
        })).then(function(info){
            return info.map(function(user){
                return user.data
            })
        }).catch(function(err) {
            console.warn(err)
        })
    },
    battle:function(player){
        var playerOneData = getPlayerData(player[0]);
        var playerTwoData = getPlayerData(player[1]);
        return axios.all([playerOneData,playerTwoData]).then(calculateScores)
        .then(function(data){
           return data;
        })
    }
}

module.exports = helper;