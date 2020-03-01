import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

@inject("User")
class Profile extends Component {
	constructor() {
		super()
		this.state = {
			style: this.useStyles()
		}
	}
	useStyles = () => makeStyles({})

	chooseSkill = async (e) => {
		e.preventDefault();
		let skills = this.state.skills;
		let userId = this.props.User.user.id;
		let data = {
			skills: skills,
			userId: userId
		};
		Axios.post(`http://localhost:8080/addSkill`, data)
	}


	updateState = async (e) => {
		const value = e.target.value;
		let skills = this.props.User.user.skills;
		if (skills.includes(value)) {
			skills.splice(skills.indexOf(value), 1)
		} else {
			skills.push(value)
		}
		this.setState({
			skills: skills
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

		if (this.props.User.user.login) {
			return (
				<form>
					<div className="userProfile">
						<div><img src={this.props.User.user.image} alt="" className="profileImage"></img></div>
						<div className="profileName">Name</div>
						<div className="profileInfo">{this.props.User.user.name}</div>
						<div className="profileEmail">Email</div>
						<div className="profileInfo">{this.props.User.user.email}</div>
						<div className="profileRanking">Ranking</div>
						<div className="profileInfo">{this.props.User.user.ranking}<span>★</span></div>
					</div>
					<div className="skills">
						Skills <br />
						<div name="skills" className='skillContainer' onChange={this.updateState}>
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Carpentry")} value="Carpentry" />Carpentry<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Electricity")} value="Electricity" />Electricity<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Design")} value="Design" />Design<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Translation")} value="Translation" />Translation<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Cooking")} value="Cooking" />Cooking<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Financial")} value="Financial" />Financial<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Plumbing")} value="Plumbing" />Plumbing<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Writing")} value="Writing" />Writing<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Programming")} value="Programming" />Programming<br />
							<input type="checkbox" defaultChecked={this.props.User.user.skills.includes("Shopping")} value="Shopping" />Shopping
                    </div>
						<button style={list} className={style.list} onClick={this.chooseSkill}>Sumbit</button>
					</div>
				</form>
			);
		} else {
			return <Redirect to="/login" />;
		}
	}
}

export default Profile;