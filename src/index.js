import './index.css';



// import './index.css';
// class List {
//   constructor(description, index) {
//     this.description = description;
//     this.completed = false;
//     this.index = index;
//   }
//   static getListItems() {
//     let listItems;
//     if (localStorage.getItem('listItems') === null) {
//       listItems = [];
//     } else {
//       listItems = JSON.parse(localStorage.getItem('listItems'));
//     }
//     return listItems;
//   }
//   static addTask(task) {
//     const tasks = this.getListItems();
//     tasks.push(task);
//     localStorage.setItem('listItems', JSON.stringify(tasks));
//     const inputValue = document.querySelector('#new-item');
//     inputValue.value = '';
//   }
//   static showItems(task) {
//     const unorderedList = document.querySelector('#list-items');
//     const div = document.createElement('div');
//     div.setAttribute('draggable', 'true');
//     div.setAttribute('class', 'list');
//     div.setAttribute('id', `${task.index}`);

//     const check = document.createElement('input');
//     check.setAttribute('type', 'checkbox');
//     check.setAttribute('class', 'checkbox');

//     const input = document.createElement('input');
//     input.setAttribute('class', 'input');
//     input.setAttribute('readonly', 'readonly');

//     const icon = document.createElement('i');
//     icon.setAttribute('class', 'bi bi-three-dots-vertical');

//     icon.addEventListener('click', () => {
//       if (!icon.classList.contains('bi-trash')) {
//         icon.classList.add('bi-trash');

//         const trash = document.querySelectorAll('.bi-trash');
//         trash.forEach((tr) => {
//           tr.addEventListener('click', (e) => {
//             let id = e.target.parentNode.id;
//             id -= 1;
//             const tasks = List.getListItems();
//               tasks.splice(id,1)
//               localStorage.setItem('listItems', JSON.stringify(tasks));
//               window.location.reload();
//               // console.log(tasks);
//             // alert((id-1))
//             // icon.parentElement.style.display = 'none';
//             // List.remove(icon);
//           });
//         });
//       }});

//     input.value = `${task.description}`;
//     div.append(check, input, icon);
//     unorderedList.append(div);
//   }

  
// }

// document.querySelector('.input-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const inputValue = document.querySelector('#new-item').value;
//   const tasks = List.getListItems();
//   let list = new List(inputValue, tasks.length + 1);
//   List.addTask(list);
//   List.showItems(list);
// });

// const showAllTasks = () => {
//   const tasks = List.getListItems();
//   tasks.forEach((task) => {
//     List.showItems(task);
//   });
// };
// document.addEventListener('DOMContentLoaded', showAllTasks);

