import React from 'react'
import Todo from '../models/todoModel'
import Item from './Item'

interface Props {
    todos: Todo[];
    setTodos: (x:(todos: Todo[]) => Todo[]) => void
}

export default function List({todos, setTodos}: Props) {
  return (
    <div className='list card'>
        {todos.map((todo) => <Item todo={todo} setTodos={setTodos} key={todo.id} />)}
    </div>
  )
}
