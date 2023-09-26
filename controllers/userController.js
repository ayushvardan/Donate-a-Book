// controllers/userController.js
const Newuserschema = require('../models/user');


exports.newuser = async (req, res) => {
    const { firstname, lastname,email,mobile,password,dob, gender,country,state } = req.body;
   // console.log(req.body);
    try {
        const newuserd= {
            fname : firstname, 
            lname : lastname, 
            email : email,
            mobile: mobile,
            password: password,
            dob: dob, 
            gender: gender,
            city: country ,
            state: state
        };
       // console.log(newuserd)
        await Newuserschema.create(newuserd);
        res.status(202).json({ message: 'Registered Successfully' });
    } catch (error) {
        res.status(501).json({ error: 'An error occurred while doing registration' });
    }
};