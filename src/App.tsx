import Add from "./components/Add"
import Todo from "./models/todoModel"
import List from "./components/List"
import { useState } from "react"


function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <div className='app'>
      <Add setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
