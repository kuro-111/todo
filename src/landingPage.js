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
  landPageDiv.classList.add('page-front');

  landPageDiv.innerHTML = `
     
      <div class="sidebar">
        <div class="navbar">
        <h3> Menu </h3>
        <ul class="projects">

        </ul>
        </div>
      </div>
      <div class= "centerSpace"> 
        <div class= "center-container"
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
    </form>
      </div>
      </div>
    `;

  main.appendChild(landPageDiv);
  const toDoSpace = document.querySelector('.centerSpace');
  const form = document.querySelector('.toDoForm');
  const projectList = document.querySelector('.projects');

  form.addEventListener('submit', (e) => {
    console.log('hello from the event listener!!');

    addToDo(e, form);
  });

  return 'landingPage';
}

export default landingPage;
