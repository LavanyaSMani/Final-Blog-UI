import React from 'react'
import {Link} from 'react-router-dom'
import Axios from 'project1/node_modules/axios'

class UserList extends React.Component
{
    constructor()
    {
        super()
        this.state={users:[]}
    }

    componentDidMount()
    {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response=>{
                        const users=reponse.data
                        this.setState({users})})
    }

    render()
    {
        console.log("in users list")
        console.log(this.state)
        return (<div>
            <h1>LISTING USERS</h1>)
        <ul>{this.state.users.map((ele)=>{<li key={ele.id}><Link to='/posts'>{ele.name}</Link></li>})}</ul>
        </div>)
    }
}

export default UserList 