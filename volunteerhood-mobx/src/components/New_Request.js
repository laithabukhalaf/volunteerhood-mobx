import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea';
import { observer, inject } from "mobx-react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

@inject('User', 'Request', 'Feed')
@observer
class NewRequest extends Component {
    constructor() {
        super();
        this.state = {
            description: "",
            skill: "",
            date: "",
            redirect: false,
            style: this.useStyles()
        }
    }

    useStyles = () =>
        makeStyles({})

    inputHandler = (e) => {
        this.props.Feed.handleInput(e.target.name, e.target.value)
    }

    updateState = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }

    addNewHelpReq = () => {
        let details = { ...this.state }
        this.props.Feed.addNewRequest(this.props.User.user.id, details, this.props.User.user.name,
            this.props.User.user.lat, this.props.User.user.lon)
        this.setState({
            redirect: true
        })
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

        const startDate = new Date();
        /* function onResize(event) {
            console.log(event.type);
        } */

        if (this.state.redirect) {
            return (
                <Redirect to="/feed" />
            )
        } else {
            return (
                <div className="requestForm">
                    <div className="descriptionForm">Descripition</div>
                    <div><TextareaAutosize /* onResize={onResize} */ maxRows={5} className="description" type="text" name='description' onChange={this.updateState}></TextareaAutosize></div>
                    <div className="skillNeeded">Skill needed</div>
                    <div>
                        <select className="skillDropdown" name="skill" onChange={this.updateState}>
                            <option value="" disabled selected>Select your option</option>
                            <option value="Carpentry"> Carpentry </option>
                            <option value="Electricity"> Electricity</option>
                            <option value="Design"> Design</option>
                            <option value="Translation"> Translation</option>
                            <option value="Cooking"> Cooking</option>
                            <option value="Financial"> Financial</option>
                            <option value="Plumbing"> Plumbing</option>
                            <option value="Writing"> Writing</option>
                            <option value="Programming"> Programming</option>
                            <option value="Shopping"> Shopping</option>
                        </select>
                    </div>
                    <div className="dateOption">Date</div>
                    <div>
                        <input className="dateSelected" type="date" name='date' min={startDate} onChange={this.updateState}></input>
                    </div>
                    <div >
                        <Button style={list} className={style.list} onClick={this.addNewHelpReq}>Submit</Button>
                    </div>
                </div>
            )
        }
    }
}

export default NewRequest;