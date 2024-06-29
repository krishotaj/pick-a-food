//  getUserHistory, saveFoodToHistory, deleteFoodFromHistory, updateUserProfile
const {User, Food} = require('./Models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


//User signup/sign in


  //Sign up req
const signup = async (req, res)=>{
    //check if the user already exists
    const user = await User.findOne({email: req.body.email, username: req.body.username})
    if(user) {
        res.send({msg: "User already exists"})
    }else{
        bcrypt.hash(req.body.password , 10, async (err, hash)=> {
            const newUser = {email: req.body.email, username: req.body.username, password: hash}
            await User.create(newUser)
            res.send({msg: "Signed up successfully"})
            //maybe use redirect here?
        })
    }
}

//Login req
//Create token for user
const signIn= async (req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(user){
        bcrypt.compare(req.body.password, user.password, (err, result)=>{
            if(result){
                const token = jwt.sign({_id:user._id}, "oi kotompoukies einai oti kalutero")
                res.send({token : token})
                //maybe use redirect here?
            }else{
               res.send({msg: "Wrong email or password"})
           }
        })
    }else {
        res.send({msg: "Wrong email or password"})
    }
}

//Get users
const getUsers =  async (req, res) => {
    const users = await User.find(); 
    res.send(users);
  };


//User
const getUserHistory = async (req, res) => {
    const user = await User.findById(req.params.id).populate('history');
    if (user){
        res.send(user.history);
    }else {
        res.send({msg: "User not found"})
    }
}

const saveFoodToHistory = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        const food = await Food.findById(req.body.FoodId)
        if (food){
            user.history.push(food)
            await user.save()
            res.send({msg:"Food saved to history"})
        }else{
            res.send({msg:"Food not found"})
        }
    } else{ 
    res.send({msg:"User not found"})
    }
}

const deleteFoodFromHistory = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      const foodId = req.body.foodId;
      const index = user.history.findIndex((food) => food._id.toString() === foodId)
      if (index !== -1) {
        user.history.splice(index, 1)
        await user.save();
        res.send({msg:"Food deleted from history"})
      } else {
        res.send({msg:"Food not found in history"})
      }
    } else {
      res.send({ msg: 'User not found' });
    }
  };

const updateUserProfile = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        user.username = req.body.username
        user.email = req.body.email
        await user.save()
        res.send({msg:"Profile updated successfully"})
        } else{
            res.send({msg: "User not found"})
        }
}


module.exports ={
    signup,
    signIn,
    getUsers,
    getUserHistory,
    saveFoodToHistory,
    deleteFoodFromHistory,
    updateUserProfile
}

