class Todo {
  constructor(name, desc, dueDate, note) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.note = note;
    this.id = crypto.randomUUID();
  }

  static changeName(name) {
    this.name = name;
  }
}

export default Todo;

//can we do forms for the list?
//on button.click => form

export function addToDo(e, form) {
  // handle form
  const data = new FormData(form);
  e.preventDefault();
  const newName = data.get('name');
  const newDesc = data.get('desc');
  const newDueDate = data.get('dueDate');
  const newNote = data.get('note');

  const newTodo = new Todo(newName, newDesc, newDueDate, newNote);

  let todoArray = JSON.parse(localStorage.getItem('todoStorage'));

  if (!Array.isArray(todoArray)) {
    todoArray = [];
  }

  todoArray.push(newTodo);

  localStorage.setItem('todoStorage', JSON.stringify(todoArray));
}

export function listTodo() {
  let todoItem = JSON.parse(localStorage.getItem('todoStorage'));

  if (!Array.isArray(todoItem)) {
    todoItem = [];
  }

  return todoItem;
}


function deleteToDo(e) {
  let delToDo = e.currentTarget.attributes['data-key'].value;

  const projects = listTodo();
  
    const indexOfProject = projects.findIndex((project) => {
      if (project.id === delToDo) {
        return true;
      } else {
        return false;
      }
    });

  const newTodoArray = projects.toSpliced(indexOfProject, 1);

  localStorage.setItem('todoStorage', JSON.stringify(newTodoArray));

  console.log(newTodoArray);


}
// add todo todo = new Todo(name, desc, dueData, note)

//form.addEventListener('submit', addToDo)

//form.addEventListener('submit',(e) =>{
//e.preventDefault();

//const

//can forms be put on classes?

//event.currentTarget.attributes['data-key'].value
