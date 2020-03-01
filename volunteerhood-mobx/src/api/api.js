const express = require("express")
const router = express.Router()
const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost/volunteerhood')
const sequelize = new Sequelize('mysql://root:Aliahumus1@localhost/volunteerhood')

router.get("/feed", async function (req, res) {
    let query = `SELECT * FROM help_requests`
    let result = await sequelize.query(query)
    res.send(result)
})

router.post("/profile", async function (req, res) {
    let userId = req.body
    userId = Object.keys(userId)
    let query = `SELECT * FROM user_skills WHERE user = ${userId}`
    let result = await sequelize.query(query)
    let newResult = result[1]
    res.send(newResult)
})

router.post("/signup", async function (req, res) {
    let newUser = req.body
    let query = `INSERT INTO user VALUES(null, '${newUser.name}','${newUser.email}' ,
            '${newUser.password}', '${newUser.phone}', '${newUser.radius}', '${newUser.ranking}', '${newUser.counter}', '')`
    let x = await sequelize.query(query)
    res.send(x)
})

router.post("/addSkill", function (req, res) {
    let skills = req.body.skills
    let userId = req.body.userId
    let query2 = `DELETE FROM user_skills WHERE user = '${userId}'`
    sequelize.query(query2)
    skills.forEach(s => {
        let query = `INSERT INTO user_skills VALUES( '${userId}', '${s}')`
        sequelize.query(query)
    })
    res.send()
})

router.post("/feed", function (req, res) {
    let newHelp = req.body
    let query = `INSERT INTO help_requests VALUES(null, '${newHelp.userReq}', null,
         'New', '${newHelp.description}', '${newHelp.skill}', '${newHelp.date}', '${newHelp.name}',
         '${newHelp.lat}','${newHelp.lon}')`
    sequelize.query(query)
    res.send('the request inserted')
})

router.put("/feed/:rid/:hid", async function (req, res) {
    let rid = req.params.rid
    let hid = req.params.hid
    let query = `UPDATE help_requests SET status = 'In process', userHelper = ${hid} WHERE id = ${rid} `
    sequelize.query(query)
    let query3 = `SELECT name FROM user WHERE id = ${hid} `
    let helperName = await sequelize.query(query3)
    helperName = helperName[0][0].name;
    let query2 = `INSERT help_requests_helpers VALUES(${rid},${hid},'${helperName}')`
    sequelize.query(query2)
    res.end()
})

router.post('/login', async function (req, res) {
    let x = req.body;
    let query = `SELECT * FROM user WHERE email = '${x.auth.email}' AND password = '${x.auth.password}'`
    let y = await sequelize.query(query)
    res.send(y[0])
})

router.post('/notifications', async function (req, res) {
    let userId = Object.keys(req.body)[0];
    let query = `SELECT help_request_id, helper_id, help_requests_helpers.name,description	
    FROM help_requests, help_requests_helpers
    WHERE help_requests.userReq = '${userId}'
    AND help_requests.id = help_requests_helpers.help_request_id`
    let helpRequestId = await sequelize.query(query);
    res.send(helpRequestId);
})

router.post('/getUserDetails', async function (req, res) {
    let userId = Object.keys(req.body)[0];
    let query = `SELECT * FROM user WHERE id = '${userId}'`
    let helperDetails = await sequelize.query(query);
    res.send(helperDetails[0]);
})

module.exports = router