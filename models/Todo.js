const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    todo:{
        type:String,
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