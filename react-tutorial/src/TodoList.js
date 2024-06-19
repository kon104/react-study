import React from 'react'
import { Todo } from './Todo';

export const TodoList = ({todos, toggleTodo}) => {
  return (
	todos.map((todo, index) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)
  )
}

export default TodoList;
