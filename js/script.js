$(document).ready(function() {


  // PROVA

    $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, stato) {
      var caratteristiche = data.results;
      /*for (i=0; i<caratteristiche.length; i++) {
        var autore = caratteristiche[i].author;*/
      datiBrano(caratteristiche);

    },
    error: function (richiesta, stato, errori) {
      alert("Errore: "+errori);
    }
  })


function datiBrano(songs) {
  for (i=0; i<=songs.length; i++) {
    let canzone = songs[i];

    var cd = {
      "cd": "cd",
      "titolo": "title",
      "autore": "author",
      "anno": "year"
    }

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var contenuto = template(cd);

    $(".cds-container").append(contenuto);
  }
}





});
