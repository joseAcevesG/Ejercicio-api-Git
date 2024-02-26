const router = require('express').Router();
// const loginRoute = require('./login')

// router.use('/login', loginRoute);

router.get('', (req, res) =>{
    res.send('Soy index de routes :)');
    
})

module.exports = router; 