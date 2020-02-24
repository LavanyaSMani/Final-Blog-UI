import React from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'
class UsersShow extends React.Component
{
    constructor()
    {
        super()
        this.state={user:[],posts:[]}
    }
    componentDidMount()
    {   const id=this.props.match.params.id
        console.log(`in userShow${id}`)
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{const user=response.data
                            this.setState({user})})
        .catch(err=>{alert (err)})
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
         .then(response=>{  const posts=response.data
             this.setState({posts})})
                           
         .catch(err=>{alert (err)})
        
    }
    // as here in the posts section there is array of posts written by all authors , above condition will get
    //post of respective user, bt again one user has many posts, so wee need to map over each postin the next posts.js

    render()
    {   console.log("in usrrs show")
        return (<div>
            <h3>USER : {this.state.user.name}</h3>
            <ul>{this.state.posts.map(post=>{return (<li key={post.id}>
                                            <Link to={`/posts/${post.id}`}>{post.title}</Link></li>)})}
            </ul>
            </div>)
        
    }
}
export default UsersShow