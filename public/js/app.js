var plantilla = "<div>"+
		"<p><strong>Sedes:</strong>__sedes__</p>"+
		"<p><strong>Co-funders:</strong>__coFunders__</p>"+
		"<p><strong>Staff:</strong>__staff__</p>"+
		"<p><strong>Teachers:</strong>__teachers__</p>"+
		"<p><strong>Teacher Assistant:</strong>__teacherAssistant__</p>"+
		"<p><strong>Learning:</strong>__learning__</p>"+
	"</div>";


$(document).ready(function(){
	$.ajax({
		url:"http://localhost:2000/demo.json",
		type: "GET",
		success:function(response){
			$("#datos").html(plantilla
				.replace("__sedes__",response.sedes)
				.replace("__coFunders__",response.coFunders)
				.replace("__staff__",response.staff)
				.replace("__teachers__",response.teachers)
				.replace("__teacherAssistant__",response.teacherAssistant)
				.replace("__learning__",response.learning)
			);
			var equipos = "<ul>";
			for (var i = 0, l = response.equipos.length; i < l; i++){
				equipos += "<li>" + response.equipos[i] + "</li>";			
			}
			equipos += "</ul>";
			$("#equipos").html(equipos);
		}
	});
});