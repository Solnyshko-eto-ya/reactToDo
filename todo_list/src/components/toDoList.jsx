import React, {Component, useState} from 'react';
import './compStyles/_toDoList.css'
import Todo from "./todo";

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todos: []
        }
        this.addNewToDo = this.addNewToDo.bind(this)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    addNewToDo(){
        this.setState({
            ...this.state,
            todos: this.state.todos.concat(this.state.todo),
            todo: ''
        })
    }
    handleInputChange(event){
        this.setState({
            ...this.state,
            todo: event.target.value
        })
    }

    render(){
        return (
            <div>
                <div className={"toDoList"}>
                    <div className={"container"}>
                        <p>react ToDoList</p>
                        <div className={"createNewToDo"}>
                            <input onInput={event => this.handleInputChange(event)} type={"text"} placeholder={"Новая задача"} className={"inputNewToDo"} value={this.state.todo}/>
                            <button className={"addNewToDo"} onClick={this.addNewToDo} >Добавить</button>
                        </div>
                        <div>
                            {this.state.todos.map((title)=> <Todo title={title}/>)}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

};

export default ToDoList;