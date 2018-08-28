/*$("#id_enviar").click(function(){
	$.post("localhost;1080/taller2/",{
		nombre:$_POST["n_nombre"],
		apellido:$_POST["n_apellido"]
	},
	function(informacion,estado){
		alert("nombre: " + nombre + "apellido: " + apellido);
	}
	
		);

});*/
/*
$(document).ready(function(){
	$("#form_taller").submit(function(){
		var datos={nombre:$("#id_nombre").val(),
				apellido:$("#id_apellido").val()}

		$.post("accion.php",datos);
	});


});
*/
    $(document).ready(function () {
        $('#id_enviar').click(function () {
            var cadena = $('#form_taller').serialize();
            $.ajax({
                type: "GET",
                url: "accion.php",
                data: cadena,
                success: function (r) {
                    if (r == 1) {
                        alertify.success("agregado con exito  .....");
                    } else {
                        alertify.success("fallo el servidor ");
                    }
                }
            });

        });
    });