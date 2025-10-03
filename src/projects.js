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

  let projectArray = JSON.parse(localStorage.getItem('projectStorage'));

  if (!Array.isArray(projectArray)) {
    projectArray = [];
  }

  projectArray.push(newProject);

  localStorage.setItem('projectStorage', JSON.stringify(projectArray));
}

export function listProjects() {
  let projectItem = JSON(localStorage.getItem('projectStorage'));

  if (!Array.isArray(projectItem)) {
    projectItem = [];
  }

  return projectItem;
}

// function editProject()

// function createProject

// function editProject

// function deleteProject
