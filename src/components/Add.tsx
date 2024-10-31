import React, { useState } from 'react'
import Todo from '../models/todoModel'
interface Props {
    setTodos: (x:(todos: Todo[]) => Todo[]) => void
}

export default function Add({setTodos}: Props) {
  const [title, setTitle] = useState('')


  const handleSubmit = () => {
      const newTodo = new Todo(title)
      setTodos(todos => [...todos, newTodo])
      console.log('new todo', newTodo);
      setTitle('')
  }
  return (
    <div className='add card'>
        <input type="text"
         placeholder='Your title here ...'
         onChange={(e) => setTitle(e.target.value)}
         />   
         <button onClick={handleSubmit}>Add</button>
    </div>
    
  )
}
