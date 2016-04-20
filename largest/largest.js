function largest()
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
		if(v < parseInt(tCount[y] - tCount[y + 1]))
		{
			v = tCount[y];
		}
	}
	alert("Sum is: " + v);
}

$(document).ready(function (){ 
	largest();
})