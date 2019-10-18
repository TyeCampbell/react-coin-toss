import React, { Component } from 'react';
import Coin from './Coin';
import heads from './heads.png';
import tails from './tails.png';

class CoinToss extends Component {
        
    static defaultProps = {
        coinFace: [heads, tails],
    }

    constructor(props){
        super(props);
        this.state = {
            face: this.randomCoinFace(),
            flips: 0, 
            heads: 0,
            tails: 0,
        }
        this.randomCoinFace = this.randomCoinFace.bind(this);
        this.toss = this.toss.bind(this);
    }
       
    randomCoinFace() {
                return this.props.coinFace[Math.floor(Math.random() * this.props.coinFace.length)];
        }  

    toss() {
        
        const face = this.randomCoinFace();

        this.setState({
            face: face,
            flips: this.state.flips += 1,

        })
        console.log(this.state.flips);
    }
        
    render() {
            
        return (    
            <div>
                <h1>Coin Toss</h1>
                <div>
                   <Coin face={this.state.face} /> 
                </div>
                <button onClick={this.toss}>Toss it!</button>
                <p>Out of {this.state.flips}, there has been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default CoinToss;