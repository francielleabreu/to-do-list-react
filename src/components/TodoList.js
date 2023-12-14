import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        this.setState(prevState => ({
            todos: [todo, ...prevState.todos],
        }));
    };

    completeTodo = id => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete };
                }
                return todo;
            }),
        }));
    };

    render() {
        return (
            <div>
                <h1>New Task:</h1>
                <TodoForm onSubmit={this.addTodo} />
                <Todo todos={this.state.todos} completeTodo={this.completeTodo} />
            </div>
        );
    }
}

export default TodoList;