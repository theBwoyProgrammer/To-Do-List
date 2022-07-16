class TodoList {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('taskstore')) || [];
  }

  addTask = (item) => {
    this.list.push({ description: item, completed: false, index: this.list.length + 1});
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
          <div>
            <input type="checkbox" name="" id="${i}">
            <p>{this.list[i].description</p>
          </div>
          <div class="icon">
            <i class="bi bi-three-dots-vertical"></i>
            <i class="bi bi-trash d-none" date-index=${i + 1}></i>
          </div>
        </div>
      `
    }
  }
}

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
  


