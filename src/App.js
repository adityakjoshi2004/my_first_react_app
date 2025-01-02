import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"; 
const App = () => {
  const name = "aditya";
  const isnameShowing = true;
  
  
  const [count, setCount] = useState(0);
  
    // Function to increment the count
    const increment = () => {
      setCount(count + 1); // Update the state
    };
  
  
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);
  
    // Function to handle input changes
    const handleInputChange = (event) => {
      setItem(event.target.value); // Update the input state
    };
  
    // Function to add the current input to the list
    const addItem = () => {
      if (item.trim()) {
        setList([...list, item]); // Add the item to the list
        setItem(""); // Clear the input field
      }
    };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
<hi>Hello, React!</hi>
<h1>Hello, {name}!</h1>
{ <h1>{isnameShowing ? name : 'someone'}</h1> } 
{/* above line has a condition that if isnameshowing is true then print my name else print someone  */}
 



    {/* A simple header for our app */}
    <h1 className="header">Welcome to React Learning!</h1>
    {/* A paragraph to describe the purpose */}
    <p className="description">This is your first React app.</p>
 
 {/* Displaying the current count */}
 <p className="count">Count: {count}</p>
 {/* Button to trigger the increment function */}
 <button className="button" onClick={increment}>
   Increment
 </button>


 <h1 className="header">React To-Do List</h1>
      <div className="input-container">
        {/* Input field for the to-do item */}
        <input
          className="input"
          type="text"
          value={item}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        {/* Button to add the item */}
        <button className="button" onClick={addItem}>
          Add
        </button>
      </div>
      {/* Display the list of items */}
      <ul className="list">
        {list.map((task, index) => (
          <li key={index} className="list-item">
            {task}
          </li>
        ))}
      </ul>

    </div>


);

}



export default App;
