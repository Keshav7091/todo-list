import React, { useState } from "react";

export default function TodoForm(props) {
  // State
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.addTask({
        id: Math.floor(Math.random() * 1000000),
        text: input,
        isComplete: false
    })

    setInput('')
  }

  return (
    <div className="container">
      <h1>My Todo List</h1>
      <form className="todo-form">
        <input type="text" placeholder="Title...." onChange={handleChange} className="todo-input" value={input} name="text" />
        <button type="submit" onClick={handleSubmit} className="Todo-btn">ADD TODO</button>
      </form>
    </div>
  );
}
