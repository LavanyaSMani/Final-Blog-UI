import React from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom'



class ShowPosts extends React.Component
{
    constructor()
    {
        super()
        this.state={username:'',userId:'',title:'',body:'',comments:[]}
    }
    componentDidMount()
    {   const id=this.props.match.params.id
        console.log(`in show post of ${id}`)
        
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{ 
            const userId = response.data.userId
            axios.get(`http://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response=>{ 
                    const username=response.data.name
                    this.setState({username,userId})
                })
                .catch(err=>{alert (err)})
        // above is used to get name from users list , here v r moving from posts to users

            this.setState({title:response.data.title, body:response.data.body})})
        .catch(err=>{alert (err)})
        // here v r having axios inside rsponse bcz the userId which is required is present in the above link posts
       // above is used to match the posts clicked, to retrive the body and its title 

        
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response=>{const comments=response.data// should not use only comments${id}
                        this.setState({comments})})
        .catch(err=>{alert (err)})
    }

    render()
    {   console.log("in showpost")
    console.log()
        return (<div>
            <h3>USER is{this.state.username}</h3>
            <p>TITLE:{this.state.title}</p>
            <p>BODY:{this.state.body}</p>
            <h1>COMMENTS</h1>
            {this.state.comments.map((comment)=>{return <li key={comment.id}>{comment.body}</li>})}
            
            
            <Link to={`../users/${this.state.userId}`}>MORE POST OF AUTHOR={this.state.username}</Link>
            </div>)
        
    }
}
export default ShowPosts