$(document).ready(function () {
  $(function () {
    $(".addTask").click(function () {
      var taskName = $('input[name= "taskName"]').val();
      var TaskDescription = $('input[name= "TaskDescription"]').val();
      var Status = $('select[name="Status"]').val();
      var StartDate = $('input[name="StartDate"]').val();
      var DueDate = $('input[name="DueDate"]').val();
      var AsignetUser = $('input[name="AsignetUser"]').val();

      var tr =
        "<tr><td>" +
        taskName +
        "</td><td>" +
        TaskDescription +
        "</td><td>" +
        Status +
        "</td><td>" +
        StartDate +
        "</td><td>" +
        DueDate +
        "</td><td>" +
        AsignetUser +
        "<td><button class=remove>Remove</button><button class=edit>Edit</button></td></tr>";

      $("#table tbody").append(tr);
    });
    var trEdit = null;
    $(document).on("click", ".edit", function () {
      trEdit = $(this).closest("tr");
      var taskName = $(trEdit).find("td:eq(0)").text();
      var TaskDescription = $(trEdit).find("td:eq(1)").text();
      var Status = $(trEdit).find("td:eq(2)").text();
      var StartDate = $(trEdit).find("td:eq(3)").text();
      var DueDate = $(trEdit).find("td:eq(4)").text();
      var AsignetUser = $(trEdit).find("td:eq(5)").text();

      $('input[name= "taskName"]').val(taskName);
      $('input[name= "TaskDescription"]').val(TaskDescription);
      $('select[name="Status"]').val(Status);
      $('input[name="StartDate"]').val(StartDate);
      $('input[name="DueDate"]').val(DueDate);
      $('input[name="AsignetUser"]').val(AsignetUser);
    });

    $(".upDate").click(function () {
      if (trEdit) {
        var taskName = $('input[name= "taskName"]').val();
        var TaskDescription = $('input[name= "TaskDescription"]').val();
        var Status = $('select[name="Status"]').val();
        var StartDate = $('input[name="StartDate"]').val();
        var DueDate = $('input[name="DueDate"]').val();
        var AsignetUser = $('input[name="AsignetUser"]').val();

        $(trEdit).find("td:eq(0)").text(taskName);
        $(trEdit).find("td:eq(1)").val(TaskDescription);
        $(trEdit).find("td:eq(2)").text(Status);
        $(trEdit).find("td:eq(3)").text(StartDate);
        $(trEdit).find("td:eq(4)").text(DueDate);
        $(trEdit).find("td:eq(5)").text(AsignetUser);
        alert("record ha been Updated!");
        trEdit = null;
      }
    });
  });

  function onTodoLoaded(untitled) {
    untitled.forEach(
      ({
        taskName,
        TaskDescription,
        Status,
        StartDate,
        DueDate,
        AsignetUser,
      }) => {
        var row = `<tr>
            <td>${taskName}</td>
            <td>${TaskDescription}</td>
            <td>${Status}</td>
            <td>${StartDate}</td>
            <td>${DueDate}</td>
            <td>${AsignetUser}</td>
            <td><button class=remove>Remove</button><button class=edit>Edit</button></td></tr>`;
        $("#table tbody").append(row);
      }
    );
  }
  $(document).on("click", ".remove", function () {
    if (confirm("Are you soure to delete?")) {
      this.closest("tr").remove();
    }
  });

  function onError(jqXhr, textStatus) {
    console.log("textStatus:", textStatus);
  }

  $.ajax({
    method: "GET",
    url: "/untitled.json",
    success: onTodoLoaded,
    error: onError,
  });
});
