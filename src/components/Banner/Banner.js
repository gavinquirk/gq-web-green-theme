import React, { Component } from 'react';

import bannerImg from '../../images/cmc_transparent.svg';

import './Banner.css';

export default class Banner extends Component {
  render() {
    return (
      <div className='Banner'>
        <img className='bannerimg' src={bannerImg} alt='Computer' />
        <h1>Gavin Quirk - Full Stack Developer</h1>
      </div>
    );
  }
}
