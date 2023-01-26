const router=require("express").Router();

const Todo=require("../models/Todo");
const auth=require('../middleware/auth');
router.post('/add',(req,res)=>{
    try {
        const todo=new Todo({
            todo:req.body.todo,
            description:req.body.description,
        });
        const newTodo=todo.save();
        res.status(200).json({status:"success",data:todo});
        
    } catch (error) {
        res.status(500).json(error);
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const todo= req.params.id
       await Todo.findByIdAndDelete(todo);
        res.status(200).json({status:"Todo Successfully deleted"});
        
    } catch (error) {
        res.status(500).json(error);
    }
})
router.put('/:id',async(req,res)=>{
    try {
        const updateTodo=await Todo.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json({status:"success",data:updateTodo});
        
    } catch (error) {
        res.status(500).json(error);
    }
})
router.get('/',async(req,res)=>{
    try {
        const todo=await Todo.find();
        res.status(200).json({status:"success",data:todo});
        
    } catch (error) {
        res.status(500).json(error);
    }
})
router.get('/:id',auth.verifyToken,async(req,res)=>{
    try {
        const getTodo=await Todo.findById(req.params.id);
        res.status(200).json({status:"success",data:getTodo});
        
    } catch (error) {
        res.status(500).json(`Task with that id ${req.params.id} not found`);
    }
})
module.exports=router;