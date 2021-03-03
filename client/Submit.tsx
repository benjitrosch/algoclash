import React from 'react';

const Submit = (props) => {

    return (
        <div id='options'>
            <h1 id='timer' >00:30.999</h1>

            <div id='scoreboard'>
                <h2 id='score' >{props.score}</h2>
                <h3 id='round' >{props.round} of {props.totalRounds}</h3>
            </div>

            <div id='btncontainer' >
                <button id='testbtn' onClick={props.evaluateCode} >TEST</button>
                <button>SUBMIT</button>
            </div>
        </div>
    )
}

export default Submit;