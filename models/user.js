
const mongoose = require("mongoose");

const Newuserschema = new mongoose.Schema({
    fname : {
        type : String,
        required : true,
        min: [3, 'Too short name'],
        max: 12,
    },
    lname : {
        type : String,
        min: [3, 'Too short name'],
        max: 12
    },
    email : {
        type : String,
        required :true,
    },
    mobile : {
        type : Number,
        required :true,
        unique :true,
    },
    state :{
        type :String,
    },
    city :{
        type :String,
        
    },
    password :{
        type : String,
        min: [3, 'Too short password'],
        required :true,
    },
    dob :{
        type :Date
    },
    gender : {
        type : String,
        required :true
    }, 
});

const userreg = mongoose.model("userreg", Newuserschema);
module.exports = userreg;