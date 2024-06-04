import React from "react";
import Button from "./Button";

const SideBar = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {
  return (
    <aside className="w-1/4 px-8 py-16  bg-stone-800 rounded-r-xl">
      <h2 className="text-white font-bold mt-16  text-2xl tracking-wide">
        YOUR PROJECTS
      </h2>
      <div className="h-10 w-44 rounded-md mt-10  bg-stone-700 flex justify-center hover:bg-stone-600 transition">
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {

          let cssClasses = "w-full text-left px-2 py-1 rounded-md mt-4  bg-stone-900 hover:text-stone-200 hover:bg-stone-950"
          
          if(project.id === selectedProjectId) {
            cssClasses += ' bg-stone-950 text-stone-200'
          }else{
            cssClasses += ' text-stone-400'
          }
          return (
            <li key={project.id}>
            <button
              onClick={() => onSelectProject(project.id)}
              className= {cssClasses}
            >
              {project.title}
            </button>
          </li>
          )
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
