const Person = require('../models/person');

exports.getAdminPage = (req, res)=>{
res.render('admin.ejs');
}

exports.saveUserData = (req, res) =>{
    console.log(req.body);
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    const person = new Person(user);
    person.saveData();
    person.redirect('/admin');
}