import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

@inject('Feed', 'User')
@observer
class Notifications extends Component {
    constructor() {
        super();
        this.state = {
            style: this.useStyles()
        }
    }

    useStyles = () => makeStyles({})

    UNSAFE_componentWillMount() {
        this.props.Feed.matchHelpAndHelper(this.props.User.user.id);
    }
    render() {
        const list = {
            border: 0,
            borderRadius: 0,
            backgroundColor: '#5B2333',
            boxShadow: '#564D4A',
            color: 'white',
            size: 'small',
            letterSpacing: 2,
            fontSize: 14,
            margin: '10px'
        }
        const container = {
            margin: '10px',
            border: '1px solid #F24333',
            backgroundColor: 'white',
            boxShadow: '#564D4A',
            padding: '5px',
            color: '#564D4A',
            fontSize: 14
        }

        const style = this.state.style

        let notifications = this.props.Feed.notifications;
        let helperDetails = this.props.Feed.helperDetails;
        if (notifications.length > 0) {
            return (
                <div style={container} className={style.container}>
                    {notifications.map(n => <div key={n.helper_id + n.help_request_id}>
                        {n.name} wants to help with {n.description}
                        <div><Button style={list} className={style.list} onClick={() => this.props.Feed.userAcceptsHelp(n.helper_id)}>Accept</Button></div>
                    </div>)}
                    <div>{helperDetails.name}</div>
                    <div>{helperDetails.phone}</div>
                </div>
            )
        } else if (!this.props.User.user.login) {
            return <Redirect to='/login'></Redirect>
        } else {
            return <div>No new notifications</div>
        }
    }
}

export default Notifications;