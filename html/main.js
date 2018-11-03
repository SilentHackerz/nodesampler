

function startApp(){
	$("#getPerson").click(getName);
}

function getName(){
	const ajaxOptions = {
		url: '/randomname',
		success: handleNameRetrieval,
		dataType: 'json',
		data: {
			count: $("#naughtyCount").val()
		}
	}
	// $.ajax( {
	// 	url: '/randomname',
	// 	success: handleNameRetrieval
	// })
	//$.ajax(ajaxOptions).then(handleNameRetrieval);
	$.ajax(ajaxOptions);
}

function handleNameRetrieval( response ){
	if(response.success){
		if(response.data.length>1){
			const allButLastNameArray = response.data.slice(0, -1);
			let commaString = allButLastNameArray.reduce( function( output, nameData){
				return output + nameData.name + ', '
			}, '').slice(0,-2);
			commaString += ', and ' + response.data[response.data.length-1].name;
			$("#name").text( commaString );
			$("#addon").text(' were naughty people')
		} else {
			$("#name").text(response.data[0])
			$("#addon").text(' was a naughty person')
		}
	}
	
}


startApp();
