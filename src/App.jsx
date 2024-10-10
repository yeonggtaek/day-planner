import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <div className="task-form">
        <TaskForm onSubmit={(task) => setTasks([...tasks, task])} />
      </div>
      <div>
        <h2>Your remaining tasks:</h2> 
        {tasks.filter((t) => !t.completed).length}
        </div>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onComplete={(taskId, completed) => {
              setTasks((prev) =>
                prev.map((t) => {
                  if (t.id === taskId) {
                    t.completed = completed;
                  }
                  return t;
                })
              );
            }}
            onDelete={(taskId) => {
              setTasks((prev) => prev.filter((t) => t.id !== taskId));
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
