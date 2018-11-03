
function changeBodyContent(){
	$.ajax({
		url: '/randomtime',
		success: function(response){
			$("body").html(response);
		}
	})
}





changeBodyContent();