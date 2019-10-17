import React, { Component } from 'react';
import Coin from './Coin';
import heads from './heads.png';
import tails from './tails.png';

class CoinToss extends Component {
    constructor(props){
        super(props);
        this.state = {
            face: ['heads', 'tails']
        }
    }

    render() {
        return (
            <div>
                <h1>Coin Toss</h1>
                <div>
                   <Coin face={tails}/> 
                </div>
                <button>Toss it!</button>
            </div>
        )
    }
}

export default CoinToss;