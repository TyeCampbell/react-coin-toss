import React, { Component } from 'react';
import './Coin.css';



class Coin extends Component {
    render() {
        return (
            <img className='Coin-img' src={this.props.face} alt={`coin showing ${this.props.face}`}/> 
        )
    }
}

export default Coin;