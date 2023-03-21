import React from 'react';

const TaskForm = ({ newTodo, onNewTodoChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Welcome to todo app! Type new task below.</h1>
      <textarea value={newTodo} onChange={onNewTodoChange} />
      <button type="submit">Submit form!</button>
    </form>
  );
};

export default TaskForm;
