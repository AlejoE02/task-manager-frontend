import React, { useState } from "react";
import PropTypes from "prop-types";
import { TaskPropType } from "../models/TaskModel";

const EditTaskModal = ({ task, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    completed: task.completed,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "completed" ? e.target.checked : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-11/12 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="completed"
              className="block text-sm font-medium text-gray-700"
            >
              Completed
            </label>
            <input
              type="checkbox"
              id="completed"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
              className="mt-1"
            />
            <span className="ml-2">
              {formData.completed ? "Completed" : "Pending"}
            </span>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditTaskModal.propTypes = {
  task: TaskPropType.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditTaskModal;
