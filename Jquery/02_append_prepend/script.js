$(document).ready(function () {
    $(document).on("click", "#btn-add-paragraph", function () {
        // creo un nuevo parrafo con un boton eliminar
        const newParagraph = $("<p>Lorem ipsum <button class='btn-delete'>Borrar párrafo</button></p>");
        //muestro nuevo parrafo
        $("#content").append(newParagraph);
    });

    // para eliminar prrafo
    $(document).on("click", ".btn-delete", function () {
        alert("¿Borrar parrafo?")
        $(this).parent().remove(); 
    });

    
  });



