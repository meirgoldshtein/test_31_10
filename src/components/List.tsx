import React from 'react'
import Todo from '../models/todoModel'
import Item from './Item'

interface Props {
    todos: Todo[];
    setRefresh: (x: boolean) => void
    setTodos: (x:(todos: Todo[]) => Todo[]) => void
}

export default function List({todos, setTodos, setRefresh}: Props) {
  return (
    <div className='list card'>
        {todos.map((todo) => <Item todo={todo} setTodos={setTodos} key={todo.id} setRefresh={setRefresh} />)}
    </div>
  )
}
