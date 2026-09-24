import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(routes.tasksPath());
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const response = await axios.post(routes.tasksPath(), {
      text: newTaskText,
    });

    setTasks((prev) => [...prev, response.data]);
    setNewTaskText('');
  };

  const toggleTaskState = async (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const route =
      task.state === 'active'
        ? routes.finishTaskPath(id)
        : routes.activateTaskPath(id);

    const response = await axios.patch(route);

    setTasks((prev) =>
      prev.map((t) => (t.id === id ? response.data : t))
    );
  };

  const renderTasks = (filter) =>
    tasks
      .filter((task) => task.state === filter)
      .map((task) => (
        <Item key={task.id} task={task} onClick={toggleTaskState} />
      ));

  const activeTasks = tasks.filter((t) => t.state === 'active');
  const finishedTasks = tasks.filter((t) => t.state === 'finished');

  return (
    <div>
      <div className="mb-3">
        <form className="todo-form mx-3" onSubmit={addTask}>
          <div className="d-flex col-md-3">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              required
              className="form-control me-3"
              placeholder="I am going..."
            />
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </div>
        </form>
      </div>

      {activeTasks.length > 0 && (
        <div className="todo-active-tasks">{renderTasks('active')}</div>
      )}

      {finishedTasks.length > 0 && (
        <div className="todo-finished-tasks">{renderTasks('finished')}</div>
      )}
    </div>
  );
};

export default TodoBox;
// END
