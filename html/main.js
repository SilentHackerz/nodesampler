

function startApp(){
	$("#getPerson").click(getName);
}

function getName(){
	const ajaxOptions = {
		url: '/randomname',
		success: handleNameRetrieval
	}
	$.ajax(ajaxOptions);
}

function handleNameRetrieval( response ){
	$("#display > span").text(response);
}


startApp();
