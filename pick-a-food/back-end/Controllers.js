//  getUserHistory, saveFoodToHistory, deleteFoodFromHistory, updateUserProfile
const {User} = require('./Models');
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
    console.log(user)
    if(user){
        let isPasswordValid= await bcrypt.compare(req.body.password, user.password)
    
        if(isPasswordValid){
            const token = jwt.sign({_id:user._id}, "oi kotompoukies einai oti kalutero")
            res.send({token})
        }else{
               res.send({msg: "Wrong email or password"})
           }
        }
    else {
        res.send({msg: "User not found. Please sign up!"})
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
    const {id,name, imgUrl}= req.body
    if (user) {
        user.history.push({id, name, imgUrl})
        await user.save()
        res.send({msg : "Food added successfully", user})
        // const food = await Food.findById(req.body.FoodId)
    //     if (food){
    //         user.history.push(food)
    //         await user.save()
    //         res.send({msg:"Food saved to history"})
    //     }else{
    //         res.send({msg:"Food not found"})
    //     }
     }
      else{ 

    res.send({msg:"User not found"})
    }
}

const deleteFoodFromHistory = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        let foodId = req.params.history
        user.history.splice(foodId)
        user.save()
        res.send({msg:"Food deleted from history"})
        //redirect back?
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

