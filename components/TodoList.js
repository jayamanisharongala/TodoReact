import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
export class TodoList extends Component {
    state={
        todos:[],
        todoToShow:"all",
        
    };
    addTodo =(todo) => {
        this.setState({
            todos:[todo, ...this.state.todos]
        })
    }
    toggleComplete = (id) =>{
     this.setState({
         todos:this.state.todos.map(todo => {
             if (todo.id === id){
                return{
                    ...todo,
                    complete: !todo.complete
                }
             }else{
                 return todo;
             }
         })
     })
    }
    updateTodoToShow = s =>{
        this.setState({
            todoToShow:s
        })
    }
    handleDeleteTodo = id =>{
        this.setState({
            todos:this.state.todos.filter(todo => todo.id !== id)
        })
    }
    render() {
        let todos=[]
        if (this.state.todoToShow ==='all'){
            todos=this.state.todos;
        }else if (this.state.todoToShow ==='active'){
            todos=this.state.todos.filter(todo => !todo.complete );
        }else if (this.state.todoToShow ==='complete') {
            todos=this.state.todos.filter(todo => todo.complete );
        }
        
        return (
                <div>
                <TodoForm onSubmit={this.addTodo}/>
                {todos.map(todo =>(
                <ul><li>< Todo  key={todo.id}
                 toggleComplete={ () => this.toggleComplete(todo.id) } 
                 onDelete={() => this.handleDeleteTodo(todo.id)}
                 todo={todo}/></li></ul>
                ))}
                
                <div>
                    todos pending:{this.state.todos.filter(todo => !todo.complete ).length}
                </div>
                <div>
                    <button onClick ={() => this.updateTodoToShow("all")}>Show All Tasks</button>
                    <button  onClick ={() => this.updateTodoToShow("active")}>Show Active Tasks</button>
                    <button  onClick ={() => this.updateTodoToShow("complete")}>Show Completed Tasks</button>
                </div>
            </div>
        )
    }
}

export default TodoList
