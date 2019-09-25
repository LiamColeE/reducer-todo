import React, { useReducer, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { reducer, defaultState } from './Reducers/reducer'



function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [itemText, setItemText] = useState();

  console.log(state);

  return (
    <div className="App">
      <input onChange={(e) => { setItemText(e.target.value) }} value={itemText} />
      <button onClick={() => { dispatch({ type: 'ADD_TODO', payload: itemText }); setItemText("") }}>Submit</button>
      <button onClick={() => { dispatch({ type: 'REMOVE_TODO', payload: itemText }); setItemText("") }}>Clear Complete</button>
      {
        state.todos.map(item => 
            <h1 style={item.completed ? {textDecoration:'line-through'}:{}} onClick={(e) => {dispatch({ type: 'TOGGLE_COMPLETE', payload: item.id }) }} key={item.id}>Todo: {item.item} </h1>
        )
      }

    </div>
  );
}

export default App;
