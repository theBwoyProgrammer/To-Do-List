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
            <p contenteditable="true">${this.list[i].description}</p>
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

export default TodoList;
