import './index.css';
import TodoList from './modules/dev.js';

const taskstore = new TodoList();

const textInput = document.querySelector('#new-item');

textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault();
    taskstore.addTask(textInput.value);
    textInput.value = null;
  }
});

window.addEventListener('load', taskstore.displayTask);
