class Project {
  constructor(name) {
    this.name = name;
  }
}

export default Project;

export function addProject(e, pForm) {
  const data = new FormData(pForm);
  e.preventDefault();
  const newName = data.get('pName');

  const newProject = new Project(newName);

  console.log(newProject);
}

// function createProject

// function editProject

// function deleteProject
