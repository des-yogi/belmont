// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

$( document ).ready(function() {
  $('.track-cargo__car');


  $('#submit-btn').click(function (e) {
    $('.track-cargo__car').addClass('animation');
    setTimeout(function () {
      $('.track-cargo__car').hide();
      $('.track-cargo__status').show(100);
      $('.tracking-scheme').show(500);
      // $('.tracking-form__error-info').show(500);
    }, 800);
  });
    //var URL = 'http://des-yogi.inf.ua/data/data.json';

    /*var onLoad = function (e) {
      if (xhr.status != 200) {
        // обработать ошибку
        console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found

      } else {
        // вывести результат
        var data =  JSON.parse(xhr.responseText);

        data.forEach(function (item) {
          console.log(item);

          for (el in item) {
            var newStr = item[el];
            console.log(item[el]);
            $('#' + el).text('' + newStr);
          }

        });
      }
    };*/

    /*var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad);
    // xhr.responseType = 'json';
    xhr.open('GET', URL, true);
    xhr.send();*/

});
