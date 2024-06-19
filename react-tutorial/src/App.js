import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid"

function App() {
  const [todos, setTodos] = useState([
    /*
    {id: 1, name: "Todo1", completed: false},
    {id: 2, name: "Todo2", completed: true}
    */
  ]); 
  const todoNameRef = useRef();
  
  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name !== "") {
      setTodos((prevTodos) => {
        return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
      });
      todoNameRef.current.value = null;
    }
    todoNameRef.current.focus();
  };
  const handleClear = (e) => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  return (
    <div>
      <div>Remaining tasks: {todos.filter((todo) => !todo.completed).length} </div>
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add task</button>
      <button onClick={handleClear} >Delete completed tasks</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
