import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleChange = e => {
        this.setState({ input: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: this.state.input,
        });
        this.setState({ input: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="todo-form">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Describe your task"
                        value={this.state.input}
                        name="text"
                        className="todo-input"
                        onChange={this.handleChange}
                        ref={this.inputRef}
                    />
                </div>
                <button className="todo-button">Add</button>
            </form>
        );
    }
}

export default TodoForm;