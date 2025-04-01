
$("#container").html("Olá <i>Galera</i>")

//$("#botao").click(function () {
//$("#container").hide()
//$("#container").show()
$("#container").toggle()
//})

$("#botao").on("click", function () {
    $("#container").toggle()
})
