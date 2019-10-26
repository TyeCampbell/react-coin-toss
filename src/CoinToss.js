import React, { Component } from 'react';
import Coin from './Coin';
import './CoinToss.css';
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
        this.reset = this.reset.bind(this);
    }
       
    randomCoinFace() {
                return this.props.coinFace[Math.floor(Math.random() * this.props.coinFace.length)];
        }  

    toss() {
        
        const face = this.randomCoinFace();

        this.setState({
            face: face
        })

        this.setState(st => ({
            flips: st.flips + 1,
            heads: face === heads ? st.heads + 1 : st.heads + 0,
            tails: face === tails ? st.tails + 1 : st.tails + 0,
        }))
        
    }

    reset() {
        this.setState({
            flips: 0,
            heads: 0,
            tails: 0,
        })
    }
        
    render() {
            
        return (    
            <div className="CoinToss">
                <h1>Coin Toss</h1>
                <div>
                   <Coin face={this.state.face} /> 
                </div>
                <button onClick={this.toss}>Toss it!</button>
                <button onClick={this.reset}>Reset</button>
                <p>Out of {this.state.flips}, there has been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default CoinToss;