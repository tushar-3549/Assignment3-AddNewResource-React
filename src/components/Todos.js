// Todos.js
import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const Todos = ({ todos }) => {
    return (
        <section className='todos'>
            {todos && todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </section>
    );
};

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default Todos;
