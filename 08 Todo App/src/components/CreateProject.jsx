import React from "react";
import projects from "../assets/no-projects.png";
import Button from "./Button";
import { useContext } from "react";
import { ProjectContext } from "../store/project-context";

const CreateProject = () => {
  const {startAddProjects} = useContext(ProjectContext)
  return (
    <section className="mt-24 flex flex-col items-center w-2/3">
      <img src={projects} alt="" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-stone-600 text-2xl font-bold mt-10">
        No Project Selected
      </h2>
      <p className="mt-5 text-stone-500 font-semibold text-lg">
        Select a project or get started with a new one
      </p>
      <div className="bg-stone-800 mt-5 w-48 h-12 rounded-xl flex justify-center hover:bg-stone-700 transition">
        <Button onClick={startAddProjects}>
            + Create Project
        </Button>
      </div>
    </section>
  );
};

export default CreateProject;
