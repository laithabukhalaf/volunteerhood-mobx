import { observable } from 'mobx'
// import { User } from './userStore'

export class HelpRequest {
    @observable userReq
    @observable description
    @observable skill
    @observable status = 'New'
    @observable date
    @observable name
    @observable lat
    @observable lon

    constructor(userReq, description, skill, date, name, lat, lon) {
        this.userReq = userReq
        this.description = description
        this.skill = skill
        this.date = date
        this.name = name
        this.lat = lat
        this.lon = lon
    }
}
