// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let bookSchema= mongoose.Schema({
    bid:{type:Number,require:true},
    name:{ type:String,required:true },
    category:{ type:String,required:true },
    desc:{ type:String,required:true },
    price:{ type:String,required:true },
})
let  bookModel = mongoose.model('books',bookSchema)

module.exports = bookModel