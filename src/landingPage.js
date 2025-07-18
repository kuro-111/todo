import { addToDo } from './todos.js';
import { listProjects } from './projects.js';

// Ex code
// const form = document.querySelector('.todoForm')

// form.addEventListener('submit', (e, form) => {
//   const newTodo = addToDo()
// })

const main = document.querySelector('.main');

function landingPage() {
  const landPageDiv = document.createElement('div');

  landPageDiv.innerHTML = `
      <h1> To Do! </h1>
      <div class="sidebar">
        <h3> Menu </h3>
        <ul class="projects">

        </ul>
      </div>
      <div class= "centerspace"> 
        <button class= "todoform"> Click me! </button>
      </div>
    `;

  main.appendChild(landPageDiv);
  const toDoSpace = document.querySelector('.centerspace');
  const form = document.querySelector('.todoform');
  const projectList = document.querySelector('.projects');

  form.addEventListener('click', () => {
    const formContainer = document.createElement('div');
  });

  return 'landingPage';
}

export default landingPage;
