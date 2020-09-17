$(document).ready(function() {

    $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data, stato) {
      var caratteristiche = data.response;
      // Richiamo la funzione 'datiBrano' e gli passo l'argomento
      datiBrano(caratteristiche);
    },
    error: function (richiesta, stato, errori) {
      alert("Errore: "+errori);
    }
  })

// Funzione per intercettare i dati nei rispettivi oggetti
function datiBrano(songs) {
  for (i=0; i<=songs.length; i++) {
    let canzone = songs[i];

// Creo un oggetto con un richiamo alle varie caratteristiche
    var cd = {
      "cd": "cd",
      "img": canzone.poster,
      "author": canzone.author,
      "title": canzone.title,
      "year": canzone.year
    }

// Vado a inserire tutto nel tamplate e lo invio all'html
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var contenuto = template(cd);

    $(".cds-container").append(contenuto);
  }
}





});
