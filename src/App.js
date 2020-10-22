import React, { useReducer } from 'react';
import { StateProvider } from "./context";
import Demo from "./components/DemoComponents"
import './App.css';
import CatActivity from './components/Activity';



function App(props) {
  const initialState = {
    name: "Finnbar",
  };

  const reducer = (state, action) => {
    const { name, activity } = action;
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name
        }
      case "SET_ACTIVITY":
          return {
            ...state,
            activity,
          };
      default:
          return state;
  }
};

 
  

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <Demo />
        <h2>What is the cat doing?</h2>
        <CatActivity />
      </StateProvider>
    </div>
  );
}

export default App;
