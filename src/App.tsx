import Add from "./components/Add"
import Todo from "./models/todoModel"
import List from "./components/List"
import { useEffect, useState } from "react"


function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const apikey = '8184480'
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://reactexambackend.onrender.com/missions/:${apikey}`);
      const data = await response.json();
      setTodos((arr :any) => [...arr, ...data]);
      console.log(data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setTodos([]);
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='app'>
      <Add setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
