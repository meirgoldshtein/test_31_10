import React, { useRef, useState } from 'react'
import Status from '../models/Status'
import Priority from '../models/Priority'
import Todo from '../models/todoModel'
interface Props {
  setRefresh: (x:(x:boolean)=> boolean) => void

}

export default function Add({ setRefresh }: Props) {
  const obj = useRef({ name: '', priority: Priority.Low, description: '', status:Status.pending })
  const [title, setTitle] = useState('')
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const apikey = '8184480'

  const postTodo = async () => {
    try {
      const newTodo = new Todo(obj.current.name, obj.current.priority, obj.current.description , obj.current.status)
      setInfo('Please wait ... we are adding your todo')
      const query = await fetch(`https://reactexambackend.onrender.com/missions/${apikey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      const data = await query.json()
      console.log(data);
      setRefresh((prev) => !prev)
      setTimeout(() => {
        setInfo('')
      }, 9000);
      setInfo('Your todo is added successfully')
    } catch (error: any) {
      setInfo('')
      setError(error.message)
      console.log(error);
    }
  }


  const handleSubmit = async () => {
    if (obj.current.name === '' || obj.current.description === '') {
      setError('All fields are required')
      return
    }
    setError('')
    console.log(obj.current);
    await postTodo()
  }
  return (
    <div className='add card'>

      <input type="text"
        placeholder='Your name here ...'
        onChange={(e) => {obj.current.name = e.target.value;console.log(obj.current.name)}}
      />
      <select name="priority" id="" onChange={(e) => obj.current.priority  = e.target.value as Priority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select name="status" id="" onChange={(e) => obj.current.status = e.target.value as Status}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <input type="text"
        placeholder='Your description here ...'
        onChange={(e) => obj.current.description = e.target.value}
      />
      {error && <p>{error}</p>}
      {info && <p>{info}</p>}
      <button onClick={handleSubmit}>Add</button>
    </div>

  )
}
