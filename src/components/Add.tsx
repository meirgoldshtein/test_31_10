import React, { useRef, useState } from 'react'
import Todo from '../models/todoModel'
interface Props {
  setRefresh: (x: boolean) => void

}

export default function Add({ setRefresh }: Props) {
  const obj = useRef({ name: '', priority: 'Low', description: '' })
  const [title, setTitle] = useState('')
  const [error, setError] = useState('');
  const apikey = '8184480'

  const postTodo = async () => {
    try {
      const newTodo = new Todo(obj.current.name, obj.current.priority, obj.current.description)
      const query = await fetch(`https://reactexambackend.onrender.com/missions/${apikey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      const data = await query.json()
      console.log(data);
      setRefresh(true)
    } catch (error: any) {
      setError(error.message)
      console.log(error);
    }
  }


  const handleSubmit = async () => {
    console.log(obj.current);
    await postTodo()
  }
  return (
    <div className='add card'>
      <input type="text"
        placeholder='Your description here ...'
        onChange={(e) => obj.current.description = e.target.value}
      />
      <input type="text"
        placeholder='Your name here ...'
        onChange={(e) => {obj.current.name = e.target.value;console.log(obj.current.name)}}
      />
      <select name="priority" id="" onChange={(e) => obj.current.priority = e.target.value}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
    </div>

  )
}
