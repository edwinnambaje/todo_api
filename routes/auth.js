const router=require('express').Router();
const bcrypt=require('bcrypt');
const Register=require('../models/Register');
const jwt=require('../helpers/jwt');
router.post('/register',async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(req.body.password,salt)
        const newUser=new Register({
            username:req.body.username,
            password:hashedPassword,
            email:req.body.email
        })
        await newUser.save();
        const {password,...others}=newUser._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error);
    }
})
router.post('/login',async(req,res)=>{
    try {
        const user=await Register.findOne({username:req.body.username})
        !user&&res.status(200).json("Wrong credentials");
        const validated=await bcrypt.compare(req.body.password,user.password)
        !validated&&res.status(200).json("Wrong credentials");
        const accessToken = jwt.sign({id:user._id})
        res.status(200).json({status:"success",data:user,token:accessToken});
        // const {password,...others}=user._doc;
        // res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports=router;
