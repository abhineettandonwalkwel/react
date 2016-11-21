var React = require('react');
var styles = require('../styles');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserWrapper = require('./UserWrapper');

function puke(player){
    return <pre> {JSON.stringify(player,null," ")}</pre>
}

function ConfirmBattle(props){
    return props.isLoading === true
       ? <p>Loading.....</p>
       : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            <h1> Confirm Battle</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserWrapper header="Player One">
                    <UserDetails info={props.playersInfo[0]} />
                </UserWrapper>
                <UserWrapper header="Player Two">
                    <UserDetails info={props.playersInfo[1]} />
                </UserWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12">
                    <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle} style={styles.space}>Intiate Battle</button>
                </div>
                <div className="col-sm-12">
                    <Link to="/playerOne">
                    <button className="btn btn-lg btn-danger" style={styles.space}>Reselect Players</button>
                    </Link>
                </div>
            </div>
       </div>
}

ConfirmBattle.propTypes = {
    isLoading:PropTypes.bool.isRequired,
    onInitiateBattle:PropTypes.func.isRequired,
    playersInfo:PropTypes.array.isRequired
}

module.exports = ConfirmBattle;