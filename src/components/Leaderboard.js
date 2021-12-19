import React, { Component } from 'react'
import UserCard from './UserCard'
import {connect} from 'react-redux'
class Leaderboard extends Component{
    render(){
        //console.log("aaaaaaaaaaaaa",this.props.users)
        return (
            
            <div>
                {
                    this.props.users.map((u)=>(<UserCard u={u}/>))
                }
                
            </div>
        )
    }
}
function mapStateToProps({users,questions}){
    const usersd=[]
    Object.keys(users).map((i)=>{
        const askedCount=Object.keys(questions).filter((k)=>(questions[k].author)===i).length
        const answerdCount=Object.keys(questions).filter((k)=>(questions[k].optionOne.votes.includes(i)) ||questions[k].optionTwo.votes.includes(i)).length
        usersd.push({user:i,asked_count:askedCount,answerd_count:answerdCount,avatar:users[i].avatarURL})
        return i;
    
    });
    usersd.sort((a,b)=> (b.asked_count+b.answerd_count) - (a.asked_count+a.answerd_count) )
    return {
        users:usersd
    }
}
export default connect(mapStateToProps)(Leaderboard)