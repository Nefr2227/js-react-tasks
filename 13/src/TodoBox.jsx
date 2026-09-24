import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)

const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), task: newTask },
    ]);
    setNewTask('');
  };

  const handleRemove = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="mb-3">
        <form className="d-flex" onSubmit={handleSubmit}>
          <div className="me-3">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              required
              className="form-control"
              placeholder="I am going..."
            />
          </div>
          <button type="submit" className="btn btn-primary">add</button>
        </form>
      </div>

      <div>
        {tasks.map((task) => (
          <Item
            key={task.id}
            task={task.task}
            onRemove={() => handleRemove(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
// END
