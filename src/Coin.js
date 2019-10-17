import React, { Component } from 'react';
import './Coin.css';


class Coin extends Component {
    render() {
        return (
            <img className='Coin-img' img src={this.props.face} alt="coin image"/> 
        )
    }
}

export default Coin;