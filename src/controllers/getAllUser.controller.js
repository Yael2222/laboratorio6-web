const {getAllPeople} = require("../services/allUsers.service.js")


const getAll = (req, res) => {
    try {
        const users = getAllPeople()
        res.render('allUsers.pug', { users });
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAll
}
