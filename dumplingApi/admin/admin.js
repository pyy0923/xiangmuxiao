const express = require('express')
const router =express.Router()

const Login = require('./adminRouter/adminUserRouter')
const Root = require('./adminRouter/adminRootRouter')
const Book = require('./adminRouter/adminBookRouter')

const People=require('./peopleRouter/peopleRouter')
// 用户登录相关
router.use('/user',Login)
router.use('/people',People)
router.use('/book',Book)
// 权限管理相关
router.use('/root',Root)
module.exports=router