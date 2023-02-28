import React, { useState } from 'react';
import Todolist from './TodoList';


function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);
  return (
    <>
      <Todolist  todos={todos}/>
      <input type ='text' />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
  </>
  )
}

export default App;
