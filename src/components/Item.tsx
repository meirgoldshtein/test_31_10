import React, { useState } from 'react'
import Todo from '../models/todoModel'
interface Props {
    todo: Todo
    setRefresh: (x: boolean) => void
    setTodos: (x: (todos: Todo[]) => Todo[]) => void
}
export default function Item({ todo, setTodos, setRefresh }: Props) {
    // const handelCompletedBtn = () => {
    //     setTodos((todos) => {
    //     return todos.map(t => {
    //         console.log(t.completed);
    //         if (t.id === todo.id) {               
    //             return { ...t, completed: !t.completed } as Todo
    //         }
    //         return t
    //     })})
    // }
    const[error, setError] = useState('');
    const apikey = '8184480'
    const updateTodo = async() => {
        try {
            const query = await fetch(`https://reactexambackend.onrender.com/missions/${apikey}/progress/${todo.id}`, {
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
const handelProgressBtn = async() => {
    await updateTodo()
    setRefresh(true)
}

    const handelDeleteBtn = () => {
        setTodos((todos) => {
            console.log('item success deleted');
            return todos.filter(t => t.id !== todo.id)
        })

    }
    return (
        <div className={`${todo.status} item`}  >
            <p>{todo.description}</p>
            <p>{todo.priority}</p>
            <p className={todo.status}>{todo.status}</p>
            { todo.status != 'Completed' && <button onClick={handelProgressBtn}>Progress</button>}
            <button onClick={handelDeleteBtn}>❌</button>
        </div>
    )
}
