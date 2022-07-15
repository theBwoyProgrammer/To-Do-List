import './index.css';
class List {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
  static getListItems() {
    let listItems;
    if (localStorage.getItem('listItems') === null) {
      listItems = [];
    } else {
      listItems = JSON.parse(localStorage.getItem('listItems'));
    }
    return listItems;
  }
  static addTask(task) {
    const tasks = this.getListItems();
    tasks.push(task);
    localStorage.setItem('listItems', JSON.stringify(tasks));
    const inputValue = document.querySelector('#new-item');
    inputValue.value = '';
  }
  static showItems(task) {
    const unorderedList = document.querySelector('#list-items');
    const div = document.createElement('div');
    div.setAttribute('draggable', 'true');
    div.setAttribute('class', 'list');

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'checkbox');

    const input = document.createElement('input');
    input.setAttribute('class', 'input');
    input.setAttribute('readonly', 'readonly');

    const icon = document.createElement('i');
    icon.setAttribute('class', 'bi bi-three-dots-vertical');
    icon.setAttribute('id', 'three-dots');

    input.value = `${task.description}`;
    div.append(check, input, icon);
    unorderedList.append(div);
  }
}

document.querySelector('.input-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = document.querySelector('#new-item').value;
  const tasks = List.getListItems();
  let list = new List(inputValue, tasks.length + 1);
  List.addTask(list);
  List.showItems(list);
});

const showAllTasks = () => {
  const tasks = List.getListItems();
  tasks.forEach((task) => {
    List.showItems(task);
  });
};
document.addEventListener('DOMContentLoaded', showAllTasks);


// const removeBtn = document.createElement('button');
//   removeBtn.setAttribute('type', 'button');
//   removeBtn.id = `remove-book-${book.id}`;
//   removeBtn.classList.add('btn', 'btn-remove', 'clickeable');
//   removeBtn.innerHTML = 'Remove';

//   removeBtn.addEventListener('click', () => {
//     const targetBook = new Book();
//     targetBook.removeBook(book.id);
//     removeBtn.parentElement.remove();
//   });

//   bookHTML.appendChild(removeBtn);

//   return bookHTML;
// };
