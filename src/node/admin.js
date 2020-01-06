const express = require('express')
const router =express.Router()

const Login = require('./userRouter')
const Food = require('./adminS')
// 用户登录相关
router.use('/user',Login)
// 权限管理相关
router.use('/food',Food)
module.exports=router