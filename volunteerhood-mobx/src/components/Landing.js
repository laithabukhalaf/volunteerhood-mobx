import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
const logo = require('../../src/Files/volunteerhood.png')
const video = require('../../src/Files/goodDeeds.MP4')

@inject("Request", "Feed", "User")
@observer
class Landing extends Component {

  render() {

    return (
      <div className="row">
        <video id="background-video" loop autoPlay muted='true' height='200' >
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support the video tag.
            </video>
        <div className='counter'>{this.props.Feed.feed.length} PEOPLE WAS HELPED</div>
        <div className="logo">
          <img className="logo" alt="Welcome" src={logo} width="150" height="150" />
        </div>
      </div>

    );
  }
}

export default Landing;