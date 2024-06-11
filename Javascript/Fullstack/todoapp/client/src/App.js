import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import { getTodos } from './api'
import React, { useState, useEffect} from 'react'

function App() {
  const [todos,setTodos] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
       <TodoForm />
      </header>
    </div>
  );
}

export default App;
