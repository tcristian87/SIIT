$(document).ready(function() {
  var number = 0;

$('#addCharacter').on('click', function() {
    $(this).remove();
    $('#crew-form').fadeIn();
});


$('.add-row').on('click', function () {
                var name = $("#MovieTitle").val();
                var actorName = $("#actorName").val();
                var picture = $("#picture").val();
                var markup = "<tr><td>" + name + "</td><td>" 
                + actorName + "</td><td><img src='" + picture + "'height='100px' width='100px' style = 'border-radius: 30%'></td><td><button class=remove>Remove</button></td></tr>";
                $("table tbody").append(markup);
                $("input").val('');
                $("#tabel").show();
                $("#img").show();
            });
            
$('table').on('click',".remove", function() {
        $(this).closest("tr").remove();
        });
       
});

$('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('input').on('focusout', function() {
    if (!this.value)  {
      $(this).parent().find('label').removeClass('active');
    }
  });
 
