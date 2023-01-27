const Todo=require("../models/Todo");
exports.add=async(req,res)=>{
    try {
        const todo=new Todo({
            todo:req.body.todo,
            description:req.body.description,
        });
        await todo.save();
        res.status(200).json({status:"success",data:todo});
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.delete=async(req,res)=>{
    try {
        const todo= req.params.id
       await Todo.findByIdAndDelete(todo);
        res.status(200).json({status:"Todo Successfully deleted"});
        
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.update=async(req,res)=>{
    try {
        const updateTodo=await Todo.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json({status:"success",data:updateTodo});
        
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.getAll=async(req,res)=>{
    try {
        const todo=await Todo.find();
        res.status(200).json({status:"success",data:todo});
        
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.getOne=async(req,res)=>{
    try {
        const getTodo=await Todo.findById(req.params.id);
        res.status(200).json({status:"success",data:getTodo});
        
    } catch (error) {
        res.status(500).json(`Task with that id ${req.params.id} not found`);
    }
}