const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    name:{
        type:String
    },
    last:{
        type:Number
    },
    buy:{
        type:Number
    },
    sell:{
        type:Number
    },
    volume:{
        type:Number
    },
    base_unit:{
        type:String
    }
})
const Task=mongoose.model('Task',taskSchema)
module.exports=Task