import React, { useState, useRef } from "react";
import Modal from "./Modal";

const TaskForm = ({ onAdd }) => {
  const modal = useRef()
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex itmes-center gap-4">
        <Modal ref={modal} buttonCaption='Ok'>
            <p>Task should contain some value</p>
        </Modal>
      <input
        type="text"
        className="w-64 px-2 py-2 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hoveR:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
