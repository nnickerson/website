function changeTextColor()  
{
	yyy = document.getElementById("TextColor");
	$('#TextColor').css('color', 'red');
	
}

function addTextBelow() 
{
	$('#b4').after("The next line text!");
	$("#Fader").fadeOut(3000);
    $("#Fader").fadeIn(3000);
	alert("THIS IS AN ALERT!")
}


