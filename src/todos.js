class Todo {
  constructor(name, desc, dueDate, note) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.note = note;
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
}



// add todo todo = new Todo(name, desc, dueData, note)

//form.addEventListener('submit', addToDo)

//form.addEventListener('submit',(e) =>{
//e.preventDefault();

//const

//can forms be put on classes?
