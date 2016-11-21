var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserWrapper = require('./UserWrapper');

function Results(props) {
    var winner = props.scores[0] > props.scores[1] ? 0 : 1 ;
    var loser = winner === 1 ? 0 : 1 ;
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            <h1> Battle Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserWrapper header="Winner">
                    <UserDetails score={props.scores[winner]} info={props.playersInfo[winner]}/>
                </UserWrapper>
                <UserWrapper header="Looser">
                    <UserDetails score={props.scores[loser]} info={props.playersInfo[loser]} />
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
    )
}
Results.propTypes = {
        isLoading:PropTypes.bool.isRequired,
        scores:PropTypes.array.isRequired,
        playersInfo:PropTypes.array.isRequired
    }

module.exports = Results;