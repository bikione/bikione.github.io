
"use strict";

window.onload = function () {
    document.getElementById("BthofSearch").onclick = SearchWord;
  
  };

function SearchWord(e) {
    e.preventDefault();
    const word = $('#textofSearch').val();
    $('#result').empty();
    $.get('/api/get?word=' + word, function (data) {
      $.each(JSON.parse(data), function (index, item) {
          //console.log(item);
        $('#result').append(`

          <div>
            <div class="fields-def">Word: </div>
            <div class="field-words">${item.word}</div>
          </div>

          <div>
            <div class="fields-def">Word Type: </div>
            <div class="field-words">${item.wordtype}</div>
          </div>
          <div>
            <div class="fields-def">Definition: </div>
            <div class="field-words">${item.definition}</div>
         </div>
         <hr>
          `);
      });

    }).fail(function (xhr) {
        if (xhr.status == 404) {
          $('#result').html('<div class="alert alert-info">Word not found</div>');
        }
      });
    }