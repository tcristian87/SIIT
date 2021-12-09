class Application {
  constructor(name) {//constructorul
                       
  this.tableElement = $('#table');
  this.tableBodyElement = $('#table').find('tbody');
  this.todoList = [];
  this.init();
}

init() {     //metoda de initializare
  this._addEventListeners();
  this.loadTodo();
} 

_onRemoveButton() {
  console.log('remove');
  $(this).closest('tr').remove();
}

_addEventListeners(){
  console.log('second remove')
  this.tableElement.on("click", ".remove", this._onRemoveButton);
}



_render (filterText = '') {
  this.destroyTable();
  this.todoList.filter(item => !filterText || (filterText && item.Status.includes(filterText))).forEach(todo => {
    var row = todo.getRow();
    this.tableBodyElement.append(row);
  });
}

onTodosLoaded(todo) {
  todo.forEach( ({taskName, TaskDescription, Status, StartDate, DueDate, AsignetUser}) => {
      var todo = new GetTasks(taskName, TaskDescription, Status, StartDate, DueDate, AsignetUser);
     this.todoList.push(todo)
    }); 
    this._render();
  };

onError(jqXhr, textStatus) {
  console.log("textStatus:", textStatus);
}

destroyTable() {
  this.tableBodyElement.empty();
  clearInterval(this.interval);
}


loadTodo() {
  $.ajax({
    method: "GET",
    url: "/todo.json",
    success: (todo) => this.onTodosLoaded(todo),
    error: this.onError,
  });
}

}


