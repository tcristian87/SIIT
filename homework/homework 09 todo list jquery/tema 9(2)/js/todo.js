function GetTasks(TaskName, TaskDescription, Status, StartDate, DueDate, AsignetUser) {
    this.TaskName = TaskName;
    this.TaskDescription = TaskDescription;
    this.Status = Status; 
    this.StartDate = StartDate;
    this.DueDate = DueDate; 
    this.AsignetUser = AsignetUser;
  } 
  
  GetTasks.prototype.getRow = function () {
      return `<tr>
              <td>${this.TaskName}</td>
              <td>${this.TaskDescription}</td>
              <td>${this.Status}</td>
              <td>${this.StartDate}</td>
              <td>${this.DueDate}</td>
              <td>${this.AsignetUser}</td>
              <td><button class="remove">Remove</button>
              <button class="edit">Edit</button></td></tr>`;
    } 
  
