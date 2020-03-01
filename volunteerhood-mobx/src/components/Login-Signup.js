import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

@inject("Request", "Feed", "User")
@observer
class UserLog extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      style: this.useStyles()
    }
  }

  useStyles = () => makeStyles({})

  update = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  postNewUser = () => {
    let newUser = { ...this.state }
    this.props.User.addNewUser(newUser)
  }

  login = () => {
    let newUser = { ...this.state }
    this.props.User.login(newUser.email, newUser.password)
  }

  render() {
    const list = {
      border: 0,
      borderRadius: 0,
      backgroundColor: '#5B2333',
      boxShadow: '#564D4A',
      color: 'white',
      height: 40,
      width: 120,
      margin: 20,
      letterSpacing: 2,
      fontSize: 16
    }

    const style = this.state.style

    if (this.props.User.user.login) {
      return (
        <Redirect exact to="/feed" />
      )
    } else {
      return (
        <div>
          <div className="loginForm">
            <h3>LOG IN</h3>
            <div><input className="emailInput" name='email' type="email" placeholder="Email" onChange={this.update}></input></div>
            <div><input id="passwordInputSignIn" name='password' type="password" placeholder="Password" onChange={this.update}></input></div>
            <Button style={list} className={style.list} onClick={this.login}>LOG IN</Button>
          </div>
          <div className="signupForm">
            <h3>SIGN UP</h3>
            <div><input className="nameInput" name='name' type="text" placeholder="Name" onChange={this.update}></input></div>
            <div><input className="emailInput" name='email' type="email" placeholder="Email" onChange={this.update}></input></div>
            <div><input id="passwordInputSignUp" name='password' type="password" placeholder="Password" onChange={this.update}></input></div>
            <div><input id="phoneInput" name='phone' type="text" placeholder="Phone number" onChange={this.update}></input></div>
            <Button style={list} className={style.list} onClick={this.postNewUser}>SIGN UP</Button>
          </div>
        </div>
      )
    }
  }
}

export default UserLog;