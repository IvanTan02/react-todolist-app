import './Task.css';

function Task({ task, toggleComplete, deleteTask }) {
  const styles = {
    backgroundColor: task.completed ? 'rgba(136, 238, 154, 0.2)' : '',
  };

  const textStyles = {
    textDecoration: task.completed ? 'line-through' : 'none',
  };

  return (
    <>
      <div className="Task" style={styles}>
        <div className="task-body">
          <input type="checkbox" id="task" checked={task.completed} onChange={toggleComplete} />
          <label htmlFor="task" style={textStyles}>
            {task.text}
          </label>
        </div>
        <button onClick={deleteTask}>Remove</button>
      </div>
    </>
  );
}

export default Task;
