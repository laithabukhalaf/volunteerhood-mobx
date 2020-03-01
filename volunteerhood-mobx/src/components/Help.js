import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


@inject('Request', 'Feed', 'User')
@observer
class Help extends Component {
  constructor() {
    super();
    this.state = {
      style: this.useStyles()
    }
  }

  useStyles = () => makeStyles({})

  acceptReq = () => {
    this.props.Feed.acceptReq(this.props.f.id, this.props.User.user.id)
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
      fontSize: 14
    }

    const style = this.state.style

    let f = this.props.f
    return (
      <div className='card'>
        <Card style={{ backgroundColor: "#F7F4F3" }}>
          <CardMedia
            image={require('../../src/Files/volunt.png')}
            title="User image"
            style={{ height: 100, opacity: 0.5, maxWidth: '100', maxHeight: '100'}}
          />
          <div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {f.skill}
              </Typography>
              <Typography fontSize='15px'>
                {f.name}
              </Typography>
              <Typography fontSize='12px'>
                {f.date}
              </Typography>
              <Typography variant="body2" color="textSecondary" fontSize='12px'>
                {f.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" fontSize='12px'>
                {this.props.User.getDistanceFromLatLonInKm(this.props.User.user.lat, this.props.User.user.lon,
                  f.lat, f.lon)}
              </Typography>
              <Typography variant="h6" component="h6">
                {f.status}
              </Typography>
            </CardContent>
          </div>
          <CardActions>
            <Button style={list} className={style.list} onClick={this.acceptReq}>
              HELP
        </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Help;