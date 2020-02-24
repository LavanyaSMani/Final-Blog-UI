import React from 'react';
import UsersShow from './UsersShow'
import Posts from './Posts'
import ShowPosts from './ShowPosts'
import {BrowserRouter,Route,Link} from 'react-router-dom'


import Home from './Home'

import Users from './Users'





function App()
{
  return (<BrowserRouter>
  <div><h1>HI </h1>
    <Link to='/'>HOME</Link>|
    <Link to ='/users'>USERS</Link>|
    <Link to='/posts'>POSTS</Link>
  
    

    <Route path='/' component={Home} />
    <Route path='/users' component={Users} exact={true}/>
    <Route path='/users/:id' component={UsersShow}/>
    <Route path='/posts' component={Posts} exact={true}/>
   
    
    <Route path='/posts/:id' component={ShowPosts}/>
    
    
  </div>
  </BrowserRouter>)
}
export default App
