import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
              type="text"
              placeholder="update task"
              value={input}
              name="text"
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          <>
            <input
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
              type="text"
              placeholder="add task"
              value={input}
              name="text"
            />
            <button className="todo-button">Add todo</button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
