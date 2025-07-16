class Project{

constructor(name, todos) {
    this.name = name;
    this.todos = todos;
   }
   
    addTodosToProject(project, todos) {
        project.todos = todos
    }

}

export default Project

// function createProject

// function editProject

// function deleteProject