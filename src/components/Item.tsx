import React, { useState } from 'react'
import Todo from '../models/todoModel'
interface Props {
    todo: Todo
    setRefresh: (x: (x: boolean) => boolean) => void

}
export default function Item({ todo, setRefresh }: Props) {
    const [error, setError] = useState('');
    const apikey = '8184480'

    const deleteTodo = async () => {
        try {
            const query = await fetch(`https://reactexambackend.onrender.com/missions/${apikey}/${todo._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await query.json()
            console.log(data);
        }
        catch (error: any) {
            setError(error.message)
            console.log(error);
        }
    }

    const updateTodo = async () => {
        try {
            const query = await fetch(`https://reactexambackend.onrender.com/missions/${apikey}/progress/${todo._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await query.json()
            console.log(data);
        }
        catch (error: any) {
            setError(error.message)
            console.log(error);
        }
    }
    const handelProgressBtn = async () => {
        await updateTodo()
        setRefresh((prev) => !prev)
    }

    const handelDeleteBtn = async () => {
        await deleteTodo()
        setRefresh((prev) => !prev)
    }


    return (
        <div className={`${todo.status} item`}>
            <div className="details">
                <h2>Name: {todo.name}</h2>
                <p>Description: {todo.description}</p>
                <p>Priority: {todo.priority}</p>
                <p>Status: {todo.status}</p>
            </div>
            <div className="buttons">
            {
            todo.status != 'Completed' &&
                <button onClick={handelProgressBtn} className='progressBtn'>
                    Progress</button>}
            <button onClick={handelDeleteBtn}>❌</button>
            </div>


        </div>
    )
}
