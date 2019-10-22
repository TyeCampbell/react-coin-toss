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
            flipAnimaiton: false,
            frontFace: this.randomCoinFace(),
            backFace: this.randomCoinFace(),
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
        
        this.setState({flipAnimaiton: true});

        const face = this.randomCoinFace();

        console.log(face);

        if (face === heads) {
            this.setState({
                frontFace: this.props.coinFace[0],
                backFace: this.props.coinFace[1],
                heads: this.state.heads += 1,
                flips: this.state.flips += 1,
            })
        } else if (face === tails) {
            this.setState({
                frontFace: this.props.coinFace[1],
                backFace: this.props.coinFace[0],
                heads: this.state.tails += 1,
                flips: this.state.flips += 1,
            })
        }
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
                <div className='flip-coin'>
                    <div className={`flip-coin-inner ${this.state.flipAnimation === true ? 'flip-animation' : ''}`}>
                        <div className='flip-coin-front'>
                            <Coin face={this.state.frontFace} /> 
                        </div>
                        <div className='flip-coin-back'>
                            <Coin face={this.state.backFace} /> 
                        </div>
                    </div>
                </div>
                <button onClick={this.toss}>Toss it!</button>
                <button onClick={this.reset}>Reset</button>
                <p>Out of {this.state.flips}, there has been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default CoinToss;