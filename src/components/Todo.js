import React, { Component } from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: {
                id: null,
                value: '',
            },
        };
    }

    submitUpdate = value => {
        this.setState({
            edit: {
                id: null,
                value: '',
            },
        });
    };

    render() {
        const { todos, completeTodo } = this.props;
        const { edit } = this.state;

        if (edit.id) {
            return <TodoForm edit={edit} onSubmit={this.submitUpdate} />;
        }

        return todos.map((todo, index) => (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
            </div>
        ));
    }
}

export default Todo;