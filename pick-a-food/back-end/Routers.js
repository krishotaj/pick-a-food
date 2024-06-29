// /login, /signup, /my-history, /my-profile
const express = require('express');
const controllers = require('./Controllers');
const router = express.Router();


//route for each controller
    //route for /signup
    router.post('/signup', controllers.signup);
    
    //route for /signin or /login
    router.get('/login', controllers.signIn);

    //route for get all users (/users)
    router.get('/users', controllers.getUsers);

    //route for get user history (/my-history)
    router.get('/my-history/:id', controllers.getUserHistory);

    //route for save food to history(/save-food)
    router.post('/save-food/:id', controllers.saveFoodToHistory);

    
    //route for delete food from history (/delete-food)
    router.delete('/delete-food/:id', controllers.deleteFoodFromHistory);


    //route for update user profile(/update-profile)
    router.put('/update-profile/:id', controllers.updateUserProfile);



module.exports = router;