const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    Completed:{
        type:String,
        default:false
    }

})
module.exports=mongoose.model('Todo',TodoSchema);