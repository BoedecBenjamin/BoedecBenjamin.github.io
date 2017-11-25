$(document).ready(function() {
	$.ajax({
		url : " [URL_DE_VOTRE_WEB_SERVICE] ",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$(' [ID_DE_VOTRE_BALISE_D_AFFICHAGE] ').append(data.[VARIABLE_RECUE]);
		},

		error : function(xhr, status, err) {
			$(' [ID_DE_VOTRE_BALISE_D_AFFICHAGE] ').append(err+" N/A");
		}
	});
});
			