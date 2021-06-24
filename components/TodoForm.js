import React, { Component } from 'react'
import shortid from 'shortid'

 class TodoForm extends Component {
     state={
         text:''
     }
     handleChange = (event) =>{
         this.setState({
             [event.target.name]:event.target.value
         })
     }
     handleSubmit = (event) =>{
         event.preventDefault();
         this.props.onSubmit({
             id:shortid.generate(),
             text:this.state.text,
             complete:false
         });
         this.setState({
             text:""
         })
     }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>TODO-MATIC</h1>
                <h2>What needs to be done ??</h2>
                <input 
                name="text"
                value={this.state.text}  
                onChange={this.handleChange}
                placeholder="Enter the text"/>
                <button onClick={this.handleSubmit}>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm
