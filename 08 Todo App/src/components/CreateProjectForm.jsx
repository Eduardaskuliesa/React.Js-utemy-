import React from "react";
import Input from "./Input";
import Modal from "./Modal";

const CreateProjectForm = ({ onSave, onCancel }) => {
  const modal = React.useRef();
  const title = React.useRef();
  const description = React.useRef();
  const dueDate = React.useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };


  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Opps,, looks like you doomd</p>
        <p className="text-stone-600 mb-4">Please provide valid value</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md transition"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="flex-col">
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default CreateProjectForm;
