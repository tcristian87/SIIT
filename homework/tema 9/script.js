$(document).ready(function () {

  
  // $("#filter").keyup(function() {
  //   var rows = $("#tbody").find("tr").hide();
  // if (this.value.length) {
  //     var data = this.value.split(" ");
  //     $.each(data, function (i, v) {
  //         rows.filter(":contains('" + v + "')").show();
  //     });
  // } else rows.show();
  // });   este un model de functie pentru search

  $("#filter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $("#searchByTaskDescription").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function () {
      $(this).toggle(
        $(this).find("td").eq(1).text().toLowerCase().indexOf(value) > -1
      );
    });
  });
  $("#searchByStatus").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function () {
      $(this).toggle(
        $(this).find("td").eq(2).text().toLowerCase().indexOf(value) > -1
      );
    });
  });
  $("#searchByStartDate").on("keyup", function () {
    var value = $(this).val();
    $("#tbody tr").filter(function () {
      $(this).toggle($(this).find("td").eq(3).text().indexOf(value) > -1);
    });
  });
  $("#searchByDueDate").on("keyup", function () {
    var value = $(this).val();
    $("#tbody tr").filter(function () {
      $(this).toggle($(this).find("td").eq(4).text().indexOf(value) > -1);
    });
  });
  $("#searchByAssignedUser").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function () {
      $(this).toggle(
        $(this).find("td").eq(5).text().toLowerCase().indexOf(value) > -1
      );
    });
  });

  $(function () {
    $(".addTask").on("click", function () {
      var taskName = $("#taskName").val();
      var TaskDescription = $("#TaskDescription").val();
      var Status = $("#Status").val();
      var StartDate = $("#StartDate").val();
      var DueDate = $("#DueDate").val();
      var AsignetUser = $("#AsignetUser").val();

      var tr = `<tr><td>${taskName}</td><td>${TaskDescription}</td><td>${Status}</td>
        <td>${StartDate}</td><td>${DueDate}</td><td>${AsignetUser}</td>
        <td><button class=remove>Remove</button><button class=edit>Edit</button></td></tr>`;
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

      $("#taskName").val(taskName);
      $("#TaskDescription").val(TaskDescription);
      $("#Status").val(Status);
      $("#StartDate").val(StartDate);
      $("#DueDate").val(DueDate);
      $("#AsignetUser").val(AsignetUser);
    });

    $(".upDate").on("click", function () {
      if (trEdit) {
        var taskName = $("#taskName").val();
        var TaskDescription = $("#TaskDescription").val();
        var Status = $("#Status").val();
        var StartDate = $("#StartDate").val();
        var DueDate = $("#DueDate").val();
        var AsignetUser = $("#AsignetUser").val();

        $(trEdit).find("td:eq(0)").text(taskName);
        $(trEdit).find("td:eq(1)").text(TaskDescription);
        $(trEdit).find("td:eq(2)").text(Status);
        $(trEdit).find("td:eq(3)").text(StartDate);
        $(trEdit).find("td:eq(4)").text(DueDate);
        $(trEdit).find("td:eq(5)").text(AsignetUser);
        alert("record has been Updated!");
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
