//   $("#filter").keyup(function() {
//     var rows = $("#tbody").find("tr").hide();
//   if (this.value.length) {
//       var data = this.value.split(" ");
//       $.each(data, function (i, v) {
//           rows.filter(":contains('" + v + "')").show();
//       });
//   } else rows.show();
//   });   este un model de functie pentru search

// function searchf() {
//   var value = $(this).val().toLowerCase();
//   $("#tbody tr").filter(function () {
//     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//   $("#filter").on("keyup", function() {
// });
// })}

$("#filter").on("keyup", function () {
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
