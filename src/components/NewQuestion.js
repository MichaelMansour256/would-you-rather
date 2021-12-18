import React, { Component } from 'react'

class NewQuestion extends Component {
    handleSubmit = () => {
        //ToDo:
    }
    render() {
        const value1=""
        const value2=""
        return (
            <div>
                <form className='new-tweet' onSubmit={this.handleSubmit}>

                    <h3 className='center'>Would You Rather ?</h3>
                    <input className='textarea' type='text' value={value1} placeholder="Type the first option"/>
                    <h3>OR</h3>
                    <input className='textarea' type='text' value={value2} placeholder="Type the second option"/>
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

export default NewQuestion