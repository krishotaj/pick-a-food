const mongoose = require('mongoose');


main().then(()=>console.log("Db connected successfully")).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://kristianahotaj99:SHAC25@krissha.7ubij5l.mongodb.net/pick-a-food")
}


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [20, "Name cannot exceed 20 characters"],
        minLength: [8, "Name should have more than 8 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        
    },
    history: [{ name: String, imgUrl: String, date: {type: Date, default: Date.now}}]
})

// const foodSchema = new mongoose.Schema({
//     name: {
//       type: String
//     },
//     imgUrl: {
//       type: String
//     }
//   });




const User = mongoose.model('User', userSchema)
// const Food = mongoose.model('Food', foodSchema);
module.exports = {User};