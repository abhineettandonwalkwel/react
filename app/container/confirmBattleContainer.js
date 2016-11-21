var React = require('react');
var ConfirmBattle = require('../components/confirmBattle');
var githubHelper = require('../utils/githubHelper');

var confirmBattleContainer = React.createClass({
    contextTypes:{
        router:React.PropTypes.object.isRequired
    },
    getInitialState:function(){
        return{
            isLoading:true,
            playersInfo:[]
        }
        
    },
    componentDidMount:function(){
        var query = this.props.location.query;
        var obj = this
        githubHelper.getPlayersInfo([query.playerOne,query.playerTwo]).then(function(player){
            obj.setState({
                isLoading:false,
                playersInfo:[
                    player[0],player[1]
                ]
            })
        })
    },
    handleInitiateBattle:function(){
        this.context.router.push({
            pathname:'/results',
            state:{
                playersInfo:this.state.playersInfo
            }
        })
    },
    render:function(){
        return(
            <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} 
                onInitiateBattle={this.handleInitiateBattle}/>
        )
    }
});

module.exports = confirmBattleContainer;