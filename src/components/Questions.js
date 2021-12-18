import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'

class Questions extends Component{
    
    render(){
        const panes = [
            { menuItem: 'UnAnswerd Question ', render: ()=>{
                return (<div className='qust_tab'>Un Answerd Question</div>)
            } },
            { menuItem: ' Answerd Question', render: () => {
                return (<div className='qust_tab'>Answerd Question</div>)
            } },
          ]
        return (
            <div>
                <Tab panes={panes}/>
            </div>
        )
    }
}

export default Questions