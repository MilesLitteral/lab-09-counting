function avg()
{
	var tCount = [];
	
	for (var x = 0; x < 4; x++)
	{
		var t = prompt("Input a number");
		console.log(t);
		tCount.push(t);
	}
	var v = 0;

	for(var y = 0; y < 4; y++)
	{
		v += parseInt(tCount[y]);
	}

	console.log(v);
	alert("The average is: " + (v/4))
}

$(document).ready(function (){ 
	avg();
})