import CreateProject from "./components/CreateProject";
import CreateProjectForm from "./components/CreateProjectForm";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";
import React, { useState } from "react";
import { ProjectContext, ProjectContextProvider } from "./store/project-context";
import { useContext } from "react";

function App() {
  const { selectedProjectId } = useContext(ProjectContext);
  let content = <SelectedProject />;

  if (selectedProjectId === undefined) {
    content = <CreateProjectForm />;
  } else if (selectedProjectId === undefined) {
    content = <CreateProject/>;
  }

  return (
    <ProjectContextProvider>
      <main className="h-screen mt-10 flex gap-8">
        <SideBar
          
        />
        {content}
      </main>
    </ProjectContextProvider>
  );
}

export default App;
