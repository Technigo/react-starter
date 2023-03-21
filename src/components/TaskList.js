import React from 'react';
import { formatRelative } from 'date-fns';

const TaskList = ({ loading, taskList, setTaskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }
  const onTaskCheckChange = (task) => {
    // eslint-disable-next-line no-shadow
    setTaskList(
      // eslint-disable-next-line no-shadow
      (taskList) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        taskList.map((singleTask) => {
          // eslint-disable-next-line no-underscore-dangle
          if (singleTask._id === task._id) {
            return { singleTask, isChecked: !singleTask.isChecked };
          }
          return singleTask;
        })
      // eslint-disable-next-line function-paren-newline
    );
  };
  return (
    <section>
      {taskList.reverse().map((task) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={task._id}>
          <h4>{task.description}</h4>
          <input
            onChange={() => onTaskCheckChange(task)}
            type="checkbox"
            checked={task.isChecked}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
          <p>{formatRelative(task.date, new Date())}</p>
        </div>
      ))}
    </section>
  );
};

export default TaskList;
