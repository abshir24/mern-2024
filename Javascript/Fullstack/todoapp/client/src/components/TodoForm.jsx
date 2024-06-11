import React, {useState, useRef, useEffect} from 'react'
import { addTodos,getTodos } from '../api'


function TodoForm(){
    let title = useRef()
    let description = useRef()
    
    const [todos,setTodos] = useState(null)

    useEffect(() => {
        const allTodos = async () => {
          let todos = await getTodos()
          setTodos(todos.data.data)
          return 
        } 

        allTodos()
    }, []);

    let submitTodo = async (e)=>{
        e.preventDefault()

        console.log("Title", title.current.value)
        console.log("Description", description.current.value)

        let todo = {
            "title" : title.current.value,
            "description": description.current.value
        }
        
        const allTodos = await addTodos(todo);
     
        setTodos(allTodos.data.data)

        e.target.reset();
    }

    return(
        <div>
            <form onSubmit={submitTodo}>
                <h1>New Todo:</h1>

                <label>Title: </label> 
                <input type="text" name="title" ref = {title}/> <br></br>

                <label>Description: </label>
                <input type="text" name="description" ref = {description}/><br></br>

                <button type="submit">Add Todo</button><br></br>
            </form>
            
        <h1>Todos:</h1>
        <ul>
            { todos ?
                todos.map((todo)=> (
                    <li>
                        <p>Title: {todo.title} Description: {todo.description}</p>
                    </li>
                ))  : null
            }
        </ul>


        </div>
    )
}

export default TodoForm