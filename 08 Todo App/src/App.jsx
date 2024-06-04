import CreateProject from "./components/CreateProject";
import CreateProjectForm from "./components/CreateProjectForm";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";
import React, { useState } from "react";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectState((prev) => {
      const taksId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taksId,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };
  const handleDeleteTask = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== id)
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleStartAddProjects = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <CreateProjectForm
        onSave={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <CreateProject onStartAddProject={handleStartAddProjects} />;
  }

  return (
    <main className="h-screen mt-10 flex gap-8">
      <SideBar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProjects}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
