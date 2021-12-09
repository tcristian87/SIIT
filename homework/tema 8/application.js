$(document).ready(function () {
    /*function reqListener () {
      console.log(this);
      //console.log(this.responseText);
    }*/
    $('#add-crew').on('click', function(){
        $(this).fadeOut();
        $('#form').fadeIn();
    })
    /*
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://jsonplaceholder.typicode.com/todos1/");
    oReq.send();    */
// $('#form').on('click', "#form", function(){
//     forms.forEach ( ({ characterN, actorN, pictureN }))
//     $('#crew-list tbody').append(row);

// })
$('#save').on('click', function(event){
    var id = $("#id") .val();
    var actorName = $('#actorName').val();
    var characterName = $('#characterName').val();
    var pictureURL = $('#pictureURL').val();
    var yearOfBirth = $('#yearOfBirth').val();
    var row = `<tr>
                <td>${id}</td>
                <td>${characterName}</td>
                <td>${actorName}</td>
                <td><img src="${pictureURL}"></td>
                <td>${yearOfBirth}</td>
                <td><button class=remove>Remove</button></td></tr>`;
            $('#crew-list tbody').append(row);
            event.preventDefault();
            
});

    function onActorsLoaded(actors) {
        actors.forEach( ({ id, characterName, actorName, pictureURL, yearOfBirth = 'Not provided' }) => {
            var row = `<tr>
                <td>${id}</td>
                <td>${characterName}</td>
                <td>${actorName}</td>
                <td><img src="${pictureURL}"></td>
                <td>${yearOfBirth}</td>
                <td><button class=remove>Remove</button></td></tr>`;
            $('#crew-list tbody').append(row);
        })
    }
    $('table').on('click', ".remove", function(){
        (this).closest('tr').remove();
    });

    function onError(jqXhr, textStatus) {
        console.log('textStatus: ', textStatus);
    }

    $.ajax({
        method: 'GET',
        url: '/actors.json',
        success: onActorsLoaded,
        error: onError
    });
});