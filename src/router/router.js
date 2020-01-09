import React from 'react'
import {HashRouter,NavLink,Route,Redirect,Switch} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Admin from '../pages/Admin/Admin.js'
import Home from '../pages/Home/Home'
import Setting from '../pages/Set/Set'
import BookssList from '../pages/Books/List/list'
import BooksAdd from '../pages/Books/Add/add'
import BooksSeek from '../pages/Books/Seek/seek'
import PeopleList from '../pages/People/List/List'
import PeopleAdd from '../pages/People/Add/Add'
import MenusList from '../pages/Menus/List/List'
import MenusAdd from '../pages/Menus/Add/Add'
import RegionList from '../pages/region/list/list'
import RegionAdd from '../pages/region/add/add'

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
                                <Route path='/admin/ home' component={Home}></Route>
                                <Route path='/admin/setting' component={Setting}></Route>
                                <Route path='/admin/books/list' component={BookssList}></Route>
                                <Route path='/admin/books/add' component={BooksAdd}></Route>
                                <Route path='/admin/books/seek' component={BooksSeek}></Route>

                                <Route path='/admin/people/list' component={PeopleList}></Route>
                                <Route path='/admin/people/add' component={PeopleAdd}></Route>

                                <Route path='/admin/menus/list' component={MenusList}></Route>
                                <Route path='/admin/menus/add' component={MenusAdd}></Route>

                                <Route path='/admin/region/list' component={RegionList}></Route>
                                <Route path='/admin/region/add' component={RegionAdd}></Route>

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