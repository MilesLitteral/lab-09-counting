function sum()
{
	var tCount = [];
	
	for (var x = 0; x < 3; x++)
	{
		var t = prompt("Number plz" + "("+x+")");
		tCount.push(t);
	}
	 var v = 0;

	for(var y = 0; y < 3; y++)
	{
		v += parseInt(tCount[y]);
	}
	alert("Sum is: " + v);
}

$(document).ready(function (){ 
	sum();
})