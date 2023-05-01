import React, { useState } from "react";

const Index5 = () => {
  let [todoList, setTodoList] = useState([]);
  let [todo, setTodo] = useState({
    text: "",
    id: "",
  });
  let [editTodo, setEditTodo] = useState({
    id: "",
    isEditTodo: false,
  });
  const handleTodoChange = (e) => {
    setTodo({
      ...todo,
      text: e.target.value,
    });
    console.log(todo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: todo.text,
      id: new Date().getTime().toString(),
    };
    setTodoList([...todoList, newTodo]);
    setTodo({
      text: "",
      id: "",
    });
  };
  const handleDelete = (id) => {
    const filterTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTodos);
  };
  const handleEdit = (id) => {
    setEditTodo({ ...editTodo, id: id, isEditTodo: true });
    let editItem = todoList.find((todo) => todo.id === id);
    console.log("edititem", editItem);
    setTodo({ ...todo, text: editItem.text, id: editItem.id });
  };
  const handleFormEdit = (e) => {
    e.preventDefault();
    console.log("prevtodos", todoList);
    let newtodos = todoList.map((todoItem) => {
      if (todoItem.id === editTodo.id) {
        return {
          text: todo.text,
          id: editTodo.id,
        };
      } else {
        return todoItem;
      }
    });
    console.log("curr todos", newtodos);
    setTodoList(newtodos);
    setTodo({
      text: "",
      id: "",
    });
    setEditTodo({
      id: "",
      isEditTodo: false,
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          placeholder="enter todo"
          value={todo.text}
          onChange={handleTodoChange}
        />
        {editTodo.isEditTodo ? (
          <button onClick={handleFormEdit}>Edit</button>
        ) : (
          <button onClick={handleSubmit}>Add</button>
        )}
      </form>
      <hr />
      {todoList.length === 0 && <h4>no items in the list</h4>}
      <ul>
        {todoList.map((todo) => {
          let { text, id } = todo;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => handleEdit(id)}>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index5;
