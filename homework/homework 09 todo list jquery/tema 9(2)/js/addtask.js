function AddTask() {  
      this.butoane =  $('#addTask');
      this.init();
      this.readValueFromInputs = function () {
      this.TaskName=  $("#TaskName").val();
      this.TaskDescription = $("#TaskDescription").val();
      this.Status = $("#Status").val();
      this.StartDate = $("#StartDate").val();
      this.DueDate = $("#DueDate").val();
      this.AsignetUser = $("#AsignetUser").val();
      }
      this.getRowContent = function () {
      return `<tr>
      <td>${this.TaskName}</td>
      <td>${this.TaskDescription}</td>
      <td>${this.Status}</td>
      <td>${this.StartDate}</td>
      <td>${this.DueDate}</td>
      <td>${this.AsignetUser}</td>
      <td><button class="remove">Remove</button><button class="edit">Edit</button></td></tr>`; 
      }

}

AddTask.prototype._button = function() {
    console.log("add task merge"); 
   this.readValueFromInputs()
     $("#table tbody").append(this.getRowContent());
};
   
  AddTask.prototype.addeventListener = function()  {
    console.log('thisisisisis');
    this.butoane.on("click", this._button);
  }

AddTask.prototype.init = function() {   // metoda de initializare
      
      this.butoane.on("click", ()=> this._button())
      // AddTask.prototype.addeventListener();
}