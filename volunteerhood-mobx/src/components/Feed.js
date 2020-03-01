import React, { Component } from 'react';
import Help from './Help'
import { Link, Redirect } from 'react-router-dom'
import { observer, inject } from "mobx-react"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

@inject('Feed', 'User', 'Request')
@observer
class Feed extends Component {
  constructor() {
    super();
    this.state = {
      style: this.useStyles()
    }
  }

useStyles = () => 
    makeStyles({})

  render() {
    const list = {
      border: 0,
      borderRadius: 0,
      backgroundColor: '#5B2333',
      boxShadow: '#564D4A',
      color: 'white',
      height: 40,
      width: '70vw',
      marginBottom: 20,
      letterSpacing: 2,
      fontSize: 16
    }

    const style = this.state.style

    if (this.props.User.user.login) {
      let feed = this.props.Feed.feed
      return (
        <div>
        <div className="welcomeMessage">
          <h4>Hello {this.props.User.user.name}, who are you going to help today?</h4>
          <Link style={{ textDecoration: 'none' }} to="/newRequest"><Button style={list} className={style.list}>Ask for Help</Button></Link>
        </div>
          {feed.map(f => <Help key={f.id} f={f} acceptReq={this.props.Feed.acceptReq} />)}
        </div>
      )
    } else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

export default Feed;