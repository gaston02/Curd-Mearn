import PropTypes from "prop-types";
import { useTasks } from "../context/TaskContext";
import {Link} from "react-router-dom"

function TaskCard({ task }) {
  const dateObject =
    typeof task.date === "string" ? new Date(task.date) : task.date;
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Link to={`/tasks/${task._id}`}>Update</Link>
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>{dateObject.toLocaleDateString()}</p>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
      .isRequired,
  }).isRequired,
};

export default TaskCard;
