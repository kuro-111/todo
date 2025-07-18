import landingPage from './landingPage';
import Todo from './todos';
import Project from './projects';

import './landingPage.css';

const template = document.querySelector('.main');

const newTodo = new Todo(
  'New todo',
  'This is the best todo.',
  new Date().toISOString(),
  'Big NOTE'
);

const newProject = new Project('Laundry', [newTodo]);

console.log(newTodo);
console.log(newProject);

landingPage();
