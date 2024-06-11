import logo from './logo.svg';
import './App.css';
import { legacy_createStore as createStore } from 'redux'
// import Demo from './components/Demo';
// import Hooks from './components/Hooks';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const initialState = 1

const counterReducer = (state = initialState, action) =>{
    switch(action.type){
      case 'PLUS':{
        return state+ (action.payload || 0) //state + 3 or 1+3
      }
      case 'MINUS':{
        return state - (action.payload || 0)
      }
      default: {
        return state;
      }
    }
}

const store = createStore(counterReducer)

store.dispatch({type: 'PLUS', payload: 3});
store.dispatch({type: 'MINUS', payload: 2 })
store.dispatch({type: 'MINUS', payload: 2 })

function App() {
  return (  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is the initial state. {store.getState()}</h1>
        </header> 
      </div>
  );
}

export default App;
