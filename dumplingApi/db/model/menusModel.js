// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let menuSchema= mongoose.Schema({
    mid:{type:Number,require:true},
    name:{ type:String,required:true },
    caixi:{ type:String,required:true },
    miaoshu:{ type:String,required:true },
    price:{ type:String,required:true },
})
let  menuModel = mongoose.model('menus',menuSchema)

module.exports = menuModel