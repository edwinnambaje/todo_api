const router=require('express').Router();
const RegisterController=require('../controllers/registerController');
router.post('/register',RegisterController.register);
router.post('/login',RegisterController.login);
module.exports=router;
