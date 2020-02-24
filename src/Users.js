import React from 'react'
import axios from 'axios' 

import {Link} from 'react-router-dom'

class Users extends React.Component
{
    constructor()
    {
        super()
        this.state={users:[]}
    }
    componentDidMount()
    {
       console.log("in users")
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response=>{console.log(response.data)
            const users=response.data
                            this.setState({users})})
        .catch(err=>{alert (err)})

        
        
    }

    render()
    {
        return (
        <div>
            <h3>USERS ARE</h3>
            <ul>{this.state.users.map((ele)=>{return <li key={ele.id}><Link to ={`/users/${ele.id}`}>
                                                                    
                                                                    
                {ele.name}</Link></li>})}</ul>
        </div>
        )
    }
}
export default Users