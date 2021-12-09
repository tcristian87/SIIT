
$(function () {
      var trEdit = null;
      $(document).on("click", ".edit", function () {
        trEdit = $(this).closest("tr");
        var TaskName = $(trEdit).find("td:eq(0)").text();
        var TaskDescription = $(trEdit).find("td:eq(1)").text();
        var Status = $(trEdit).find("td:eq(2)").text();
        var StartDate = $(trEdit).find("td:eq(3)").text();
        var DueDate = $(trEdit).find("td:eq(4)").text();
        var AsignetUser = $(trEdit).find("td:eq(5)").text();
  
        $("#TaskName").val(TaskName);
        $("#TaskDescription").val(TaskDescription);
        $("#Status").val(Status);
        $("#StartDate").val(StartDate);
        $("#DueDate").val(DueDate);
        $("#AsignetUser").val(AsignetUser);
      });
  
      $(".upDate").on("click", function () {
        if (trEdit) {
          var TaskName = $("#TaskName").val();
          var TaskDescription = $("#TaskDescription").val();
          var Status = $("#Status").val();
          var StartDate = $("#StartDate").val();
          var DueDate = $("#DueDate").val();
          var AsignetUser = $("#AsignetUser").val();
  
          $(trEdit).find("td:eq(0)").text(TaskName);
          $(trEdit).find("td:eq(1)").text(TaskDescription);
          $(trEdit).find("td:eq(2)").text(Status);
          $(trEdit).find("td:eq(3)").text(StartDate);
          $(trEdit).find("td:eq(4)").text(DueDate);
          $(trEdit).find("td:eq(5)").text(AsignetUser);
          alert("record has been Updated!");
          trEdit = null;
        }
      });
    })