import { addToDo } from './todos.js';
import { addProject, listProjects } from './projects.js';

// Ex code
// const form = document.querySelector('.todoForm')

// form.addEventListener('submit', (e, form) => {
//   const newTodo = addToDo()
// })

const main = document.querySelector('.main');

function landingPage() {
  const landPageDiv = document.createElement('div');
  landPageDiv.classList.add('page-front');

  landPageDiv.innerHTML = `
  
      <div class="sidebar">
        <div class="navbar">
        <h3> Menu </h3>
        <form class="projectForm">
        <ul>
          <li>
            <label for="Project">Project</label>
            <input
            name="pName"
            id="pName"
            class="projectName"
            type="text"
            placeholder="Project"
            />
          </li>
          </ul>
          <button type="submit">Submit</button>
          </form>
    
          </div>  
          </div>
          <div class= "centerSpace"> 
        <div class= "center-container">
        <button class="add-todo">+ Add a to do</button>
        <form class="toDoForm">
        <ul>
          <li>
          <label for="name">Task</label>
          <input
          name="name"
          id="name"
            class="toDoName"
            type="text"
            placeholder="task"
            />
            </li>
            <li>
            <label for="desc">Description</label>
            <input
            name="desc"
            id="desc"
            class="toDoDesc"
            type="text"
            placeholder="feed me"
            />
            </li>
            <li>
            <label for="dueDate">Due Date</label>
            <input
            name="dueDate"
            id="dueDate"
            class="dueDate"
            type="date"
            placeholder="dueDate"
            />
          </li>
          <li>
          <label for="note">Notes</label>
          <input
            name="note"
            id="note"
            class="note"
            type="text"
            placeholder="please"
            />
            </li>
            </ul>
            <button type="submit">Submit</button>

            
            
            `;

  main.appendChild(landPageDiv);

  const newTodo = document.querySelector('.add-todo');
  const toDoSpace = document.querySelector('.centerSpace');
  const form = document.querySelector('.toDoForm');
  const projectList = document.querySelector('.projects');

  newTodo.addEventListener('click', (e) => {
    form.classList.add('show');
    const cancel = document.createElement('button');
    cancel.classList.add('.exitform');

    form.addEventListener('submit', (e) => {
      console.log('hello from the event listener!!');

      addToDo(e, form);
    });

    console.log('I worK!!');
  });

  const pForm = document.querySelector('.projectForm');
  pForm.addEventListener('submit', (e) => {
    console.log('meh');
    addProject(e, pForm);
  });

  return 'landingPage';
}

export default landingPage;
