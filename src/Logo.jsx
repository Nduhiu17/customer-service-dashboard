import React, { Component } from 'react';
import Logoimage from './Logoimage.jpg';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={require('./Logoimage.jpg')} />
      </div>
    )
  }
}
