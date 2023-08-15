import { useState } from 'react';

import './AddTaskForm.css';

function AddTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText('');
  };

  return (
    <form className="AddTaskForm" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}

export default AddTaskForm;
