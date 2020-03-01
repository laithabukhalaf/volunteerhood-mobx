import { observable, action } from "mobx";
import axios from 'axios';
import { HelpRequest } from './HelpRequest'

export class RequestsBoard {
    @observable feed = []
    @observable left = false
    @observable notifications = []
    @observable helperDetails = {
        id: null,
        name: '',
        email: '',
        password: '',
        phone: null,
        radius: 0,
        ranking: 0,
        counter: 0
    }

    @action async getFeed() {
        let response = await axios.get('http://localhost:8080/feed');
        this.feed = response.data[0]
    }

    acceptReq = (reqId, helperId) => {
        axios.put(`http://localhost:8080/feed/${reqId}/${helperId}`)
    }

    @action addNewRequest = async (id, obj, name, lat, lon) => {
        let newRequest = new HelpRequest(
            id, obj.description, obj.skill, obj.date, name, lat, lon
        )
        await axios.post(`http://localhost:8080/feed`, newRequest)
        this.getFeed()
    }

    @action async matchHelpAndHelper(userId) {
        let x = await axios.post(`http://localhost:8080/notifications`, userId);
        x = x.data[0];
        this.notifications = x;
    }

    @action async userAcceptsHelp(id) {
        let x = await axios.post(`http://localhost:8080/getUserDetails`, id);
        this.helperDetails = x.data[0];
    }
}