import React from 'react'
import { createContext, useState } from 'react'

export const ProjectContext = createContext({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
    addTask : () => {},
    deleteTask: () => {},
    deleteProject: () => {},
    cancelProject: () => {},
    addProject: () => {},
    selectProject: () => {},
    startAddProjects: () => {},
})

export const ProjectContextProvider = ({children}) => {
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

     const ctxValue = {
        selectedProjectId: projectsState.selectedProjectId,
        projects: projectsState.projects,
        tasks: projectsState.tasks,
        addTask : handleAddTask,
        deleteTask: handleDeleteTask,
        deleteProject: handleDeleteProject,
        cancelProject: handleCancelAddProject,
        addProject: handleAddProject,
        selectProject: handleSelectProject,
        startAddProjects: handleStartAddProjects,
     }
     return (
        <ProjectContext.Provider value={ctxValue}>{children}</ProjectContext.Provider>
     )
}