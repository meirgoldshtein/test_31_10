import React from 'react'
import Todo from '../models/todoModel'
interface Props {
    todo: Todo
    setTodos: (x: (todos: Todo[]) => Todo[]) => void
}
export default function Item({ todo, setTodos }: Props) {
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

    const handelDeleteBtn = () => {
        setTodos((todos) => {
            console.log('item success deleted');
        return todos.filter(t => t.id !== todo.id)
        })
        
    }
    return (
        <div className={'item' + todo.status} >
            <p>{todo.description}</p>
            <p>{todo.priority}</p>
            <p className={todo.status}>{todo.status}</p>

                <button onClick={handelDeleteBtn}>❌</button>
        </div>
    )
}
