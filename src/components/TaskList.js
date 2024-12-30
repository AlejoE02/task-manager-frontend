/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import EditTaskModal from "./EditTaskModal";
import { TaskPropType } from "../models/TaskModel";
import PropTypes from "prop-types";

const TaskList = () => {
  const { tasks, updateTask, deleteTask, fetchFilteredTasks } =
    useContext(TaskContext);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "all") {
      fetchFilteredTasks("");
    } else {
      fetchFilteredTasks(filter);
    }
  }, [filter]);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSave = (updatedFields) => {
    updateTask(editingTask._id, updatedFields);
    setEditingTask(null);
  };

  /*const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
  });*/

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Task List</h2>
      <div className="flex justify-between mb-4">
        <div className="space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md ${
              filter === "completed" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-md ${
              filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"
            }`}
          >
            Pending
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-md"
          >
            <div>
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <p className="text-gray-500">{task.description}</p>
              <p className="text-sm text-gray-400">
                Created at: {new Date(task.createdAt).toLocaleString()}
              </p>
              <p
                className={`mt-2 text-sm ${task.completed ? "text-green-600" : "text-red-600"}`}
              >
                {task.completed ? "Completed" : "Pending"}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleEdit(task)}
                disabled={task.completed}
                className={`px-4 py-2 text-white rounded-md ${task.completed ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-blue-600"}`}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(TaskPropType).isRequired,
};

export default TaskList;
