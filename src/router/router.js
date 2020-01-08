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
                                <Route path='/admin/books/list' component={BookssList}></Route>
                                <Route path='/admin/books/add' component={BooksAdd}></Route>
                                <Route path='/admin/books/seek' component={BooksSeek}></Route>

                                <Route path='/admin/people/list' component={PeopleList}></Route>
                                <Route path='/admin/people/add' component={PeopleAdd}></Route>
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