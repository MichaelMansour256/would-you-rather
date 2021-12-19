import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
        toHome: false,
    }
    handleChange1 = (e) => {
        const text = e.target.value

        this.setState(() => ({
            optionOne: text
        }))
    }
    handleChange2 = (e) => {
        const text = e.target.value

        this.setState(() => ({
            optionTwo: text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {author}=this.props
        const { optionOne , optionTwo } = this.state
        const { dispatch,id } = this.props
        console.log(author)
        dispatch(handleAddQuestion(optionOne,optionTwo,author))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: id ? false : true,
        }))

    }
    render() {
        const { optionOne, optionTwo , toHome} = this.state
        if (toHome === true) {
            return <Redirect to='/' />
          }
        return (
            <div>
                <form className='new-tweet' onSubmit={this.handleSubmit}>

                    <h3 className='center'>Would You Rather ?</h3>
                    <input className='textarea' type='text' value={optionOne} onChange={this.handleChange1} placeholder="Type the first option" />
                    <h3>OR</h3>
                    <input className='textarea' type='text' value={optionTwo} onChange={this.handleChange2} placeholder="Type the second option" />
                    <button
                        className='btn'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}
function mapStateToProps ({authedUser}, { id }) {
    
    return {
      author:authedUser,
      
    }
  }
export default connect(mapStateToProps)(NewQuestion)