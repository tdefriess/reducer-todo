import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ''
        };
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state.newItem
        })
        this.setState({newItem: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='newItem'
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;