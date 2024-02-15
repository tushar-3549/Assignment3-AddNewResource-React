// App.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "First Title of the Assignment",
      desc: "Here's the describtion of first title and we made it create new resource like Todo App system"
    },
    {
      id: uuidv4(),
      title: "Second Title of the Assignment",
      desc: "Here's the describtion of second title and we made it create new resource like Todo App system"
    }
  ]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <NewTodo onHandleAddTodo={handleAddTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
