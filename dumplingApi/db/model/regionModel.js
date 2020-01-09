// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let regSchema= mongoose.Schema({
    rid:{type:Number,require:true},
    name:{ type:String,required:true },
    desc:{ type:String,required:true },
    postal:{ type:String,required:true },
})
let  regionModel = mongoose.model('region',regSchema)

module.exports = regionModel