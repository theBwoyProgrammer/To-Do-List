const clearAll = document.querySelector('.link-button');

const cleartodos = (taskstore) => {
  taskstore.list = taskstore.list.filter((task) => task.completed === false);
  taskstore.updateIndex();
  taskstore.populateLocalStorage();
  taskstore.displayTask();
};
export { clearAll, cleartodos };
