var correo = document.getElementById("correo")
var favoritos = document.getElementById("favoritos")

$(document).ready(function() {
    $("#correo").click(function() {
        alert("El correo fue enviado correctamente...");
    });
});
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    var ingredientes = document.getElementById("ingredientes")

$(document).ready(function() {
    $(".ingredientes").dbclick(function() {
        $(this).css ("color", "red");
    });
});
