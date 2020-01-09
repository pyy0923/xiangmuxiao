// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let foodSchema= mongoose.Schema({
    sid:{ type:String,required:true},
    name:{ type:String,required:true },
    fad:{ type:String,required:true },
    grade:{ type:String,required:true },
    time:{ type:String,required:true },
    num:{ type:String,required:true },
})
let  peopleModel = mongoose.model('people',foodSchema)

module.exports = peopleModel