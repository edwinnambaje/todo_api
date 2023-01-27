const router=require("express").Router();
const TodoController=require("../controllers/todoController");
const Todo=require("../models/Todo");
const auth=require('../middleware/auth');
router.post('/add',auth.verifyTokenAndRole,TodoController.add)
router.delete('/:id',auth.verifyTokenAndRole,TodoController.delete)
router.put('/:id',auth.verifyTokenAndRole,TodoController.update)
router.get('/',auth.verifyToken,TodoController.getAll);
router.get('/:id',auth.verifyToken,TodoController.getOne);
module.exports=router;