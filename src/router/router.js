import React from 'react'
import {HashRouter,NavLink,Route,Redirect,Switch} from 'react-router-dom'

import Login from '../pages/Login/Login'
import Admin from '../pages/Admin/Admin.js'
import Home from '../pages/Home/Home'
import Setting from '../pages/Set/Set'
import GoodsList from '../pages/Goods/List/List'
import GoodsAdd from '../pages/Goods/Add/Add'


class AppRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <NavLink to='/admin'></NavLink>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                        return(
                            <Admin>
                            <Switch>
                                <Redirect exact from='/admin' to='/admin/home'></Redirect>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/setting' component={Setting}></Route>
                                <Route path='/admin/goods/list' component={GoodsList}></Route>
                                <Route path='/admin/goods/add' component={GoodsAdd}></Route>
                            </Switch>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default AppRouter