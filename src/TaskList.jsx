import { useState, useEffect } from 'react';

import AddTaskForm from './AddTaskForm';
import Task from './Task';

const getExistingTasks = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  if (!data) return [];
  return data;
};

function TaskList() {
  const [tasks, setTasks] = useState(getExistingTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((tasks) => [...tasks, { id: crypto.randomUUID(), text: text, completed: false }]);
  };

  const toggleComplete = (taskId) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  const clearList = () => {
    setTasks((tasks) => tasks.filter((task) => false));
  };

  return (
    <div className="TaskList">
      <AddTaskForm addTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={() => toggleComplete(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
      <button style={{ marginTop: '0.8em' }} onClick={clearList}>
        Clear List
      </button>
    </div>
  );
}

export default TaskList;
