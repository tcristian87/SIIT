function Application () {            //constructorul
  this.tableElement = $('#table');
  this.tableBodyElement = $('#table').find('tbody');
  this.todoList = [];
  this.init();
}

Application.prototype.init = function() {     //metoda de initializare
  this._addEventListeners();
  this.loadTodo();
} 

Application.prototype._onRemoveButton = function() {
  console.log('remove');
  $(this).closest('tr').remove();
}

Application.prototype._addEventListeners = function() {
  // console.log('second remove');
  this.tableElement.on("click", ".remove", this._onRemoveButton);
}

Application.prototype._render =  function(filterText = '') {
  this.destroyTable();
  this.todoList.filter(item => !filterText || (filterText && item.Status.includes(filterText))).forEach(todo => {
    var row = todo.getRow();
    this.tableBodyElement.append(row);
  });
}

Application.prototype.onTodosLoaded = function(todo) {
  todo.forEach( ({taskName, TaskDescription, Status, StartDate, DueDate, AsignetUser}) => {
      var todo = new GetTasks(taskName, TaskDescription, Status, StartDate, DueDate, AsignetUser);
     this.todoList.push(todo)
    }); 
    this._render();
  };

Application.prototype.onError = function(jqXhr, textStatus) {
  console.log("textStatus:", textStatus);
}

Application.prototype.destroyTable = function () {
  this.tableBodyElement.empty();
  clearInterval(this.interval);
}


Application.prototype.loadTodo = function() {
  $.ajax({
    method: "GET",
    url: "/todo.json",
    success: (todo) => this.onTodosLoaded(todo),
    error: this.onError,
  });
}




