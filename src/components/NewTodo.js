// NewTodo.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const NewTodo = ({ onHandleAddTodo }) => {
    const [todo, setTodo] = useState({ title: '', desc: '' });

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4(),
            title: todo.title,
            desc: todo.desc
        };
        onHandleAddTodo(newTodo);
        setTodo({ title: '', desc: '' });
    };

    return (
        <div>
            <h1 className="title">Collect Data from a Form</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={todo.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="desc">Description: </label>
                        <textarea
                            name="desc"
                            id="desc"
                            value={todo.desc}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="field-group">
                        <button className="btn" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

NewTodo.propTypes = {
    onHandleAddTodo: PropTypes.func.isRequired
};

export default NewTodo;
