class TodoList {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

  addTask = (item) => {
    this.list.push({ description: item, completed: false, index: this.list.length + 1 });
    this.populateLocalStorage();
    this.displayTask();
  }

  removeTask = (index) => {
    this.list = this.list.filter((task) => task.index !== index);
    this.updateIndex();
    this.populateLocalStorage();
    this.displayTask();
  }

  updateIndex = () => {
    this.list = this.list.map((task, index) => {
      task.index = index + 1;
      return task;
    });
  }

  displayTask = () => {
    const todoList = document.querySelector('.list-items');
    todoList.innerHTML = '';
    for (let i = 0; i < this.list.length; i += 1) {
      todoList.innerHTML += `
        <div class="list">
          <div class="input">
            <input type="checkbox" name="" id="${i}">
            <p>${this.list[i].description}</p>
          </div>
          <div class="icon">
            <i class="bi bi-three-dots-vertical"></i>
            <i class="bi bi-trash d-none" data-index=${i + 1}></i>
          </div>
        </div>
      `;
    }
    const deleteBtn = document.querySelectorAll('.bi-trash');
    deleteBtn.forEach((button) => {
      button.addEventListener('click', (event) => {
        const id = parseInt(event.target.getAttribute('data-index'), 10);
        this.removeTask(id);
      });
    });

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const inputField = event.target.parentNode.querySelector('p');
        const dots = event.target.parentNode.parentNode.querySelector('.bi-three-dots-vertical');
        const trash = event.target.parentNode.parentNode.querySelector('.bi-trash');
        inputField.classList.toggle('line-through');
        trash.classList.toggle('d-none');
        dots.classList.toggle('d-none');
        this.markCompleted(parseInt(event.target.id, 10));
      });
    });
  }

  markCompleted = (index) => {
    this.list[index].completed = !this.list[index].completed;
    this.populateLocalStorage();
  }

  populateLocalStorage = () => {
    localStorage.setItem('taskstore', JSON.stringify(this.list));
  }
}

export default TodoList;

// class List {
//   constructor(description, index) {
//     this.description = description;
//     this.completed = false;
//     this.index = index;
//   }
// }

// const listInput = document.querySelector('#new-item');
// const myAddBtn = document.querySelector('#myAddBtn');
// // const list = document.querySelector('.list-items');

// // document.addEventListener('DOMContentLoaded', () => {

// const unorderedList = document.querySelector('#list-items');
// document.querySelector('form').addEventListener('click',(e)=>{
// e.preventDefault();

//   let newInput = new List(listInput.value, listItems.length + 1);

//   const div = document.createElement('div');
//   div.setAttribute('draggable', 'true');
//   div.setAttribute('class', 'list');

//   const check = document.createElement('input');
//   check.setAttribute('type', 'checkbox');
//   check.setAttribute('class', 'checkbox');

//   const input = document.createElement('input');
//   input.setAttribute('class', 'input');
//   // input.setAttribute('readonly', 'readonly');

// input.value = newInput;
// listMom.append(check, input, icon);
// unorderedList.append(listMom);

// listItems = getListItems();
// listItems.push(input);
// localStorage.setItem('listItems', JSON.stringify(listItems))
// })

// const getListItems = () => {
//   let listItems;
//   if(localStorage.getItem('listItems') === null){
//     listItems = [];
//   } else { listItems = JSON.parse(localStorage.getItem('listItems'));
//   }
//   return listItems;
//     // const setTask = (task) => {
//     //   const listItems = getListItems()
//     //   listItems.push(task);
//     //   localStorage.setItem('listItems', JSON.stringify(listItems));
//     // }

//   }
//     // if (JSON.parse(localStorage.getItem('list-items')) === null) {
//     //   listItems.push(listInput);
//     //   localStorage.setItem('list-items', JSON.stringify(listItems));
//     // } else {
//     //   const newlistItems = JSON.parse(localStorage.getItem('list-items'));
//     //   newlistItems.push(listInput);
//     //   localStorage.setItem('list-items', JSON.stringify(newlistItems));
//     // }
