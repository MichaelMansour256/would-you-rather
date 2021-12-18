import React, { Component } from 'react'
import UserCard from './UserCard'

class Leaderboard extends Component{
    render(){
        return (
            <div>
                <ul>
                    <li><UserCard/></li>
                    <li><UserCard/></li>
                    <li><UserCard/></li>
                    <li><UserCard/></li>
                </ul>
            </div>
        )
    }
}

export default Leaderboard