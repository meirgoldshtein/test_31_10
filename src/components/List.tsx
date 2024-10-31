import React from 'react'
import Todo from '../models/todoModel'
import Item from './Item'

interface Props {
    todos: Todo[];
    setRefresh: (x:( x :boolean)=> boolean) => void
    
}

export default function List({todos,  setRefresh}: Props) {
  return (
    <div className='list card'>
        {todos.map((todo) => <Item todo={todo}  key={todo._id} setRefresh={setRefresh} />)}
    </div>
  )
}
