// Todo.js
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
    const { title, desc } = todo;
    return (
        <article className="todo">
            <h3 className="todo__title">{title}</h3>
            <p>{desc}</p>
        </article>
    );
};

Todo.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    }).isRequired
};

export default Todo;
