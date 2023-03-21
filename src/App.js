import React, { useState, useEffect } from 'react';

import TaskList from 'components/TaskList';
import TaskForm from 'components/TaskForm';

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const fetchTasks = () => {
    setLoading(true);
    fetch('https://week-7-backend.onrender.com/tasks')
      .then((res) => res.json())
      .then((data) => setTaskList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        // eslint-disable-next-line comma-dangle
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // eslint-disable-next-line comma-dangle
        description: newTodo,
        // eslint-disable-next-line comma-dangle
      }),
    };

    fetch('https://week-7-backend.onrender.com/tasks', options)
      .then((res) => res.json())
      .then(() => fetchTasks())
      .finally(() => setNewTodo(''));
  };

  return (
    <div>
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      />
    </div>
  );
};
