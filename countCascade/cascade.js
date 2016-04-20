function cascade(xMin, xMax, times)
{
	for(var x = xMin; x <= xMax; x++)
	{
		console.log(x);
	}

	for(var x = xMax; x >= xMin; x--)
	{
		console.log(x);
	}

	if(times > 1)
	{
		return cascade(xMin,xMax, parseInt(times - 1))
	}
}

$(document).ready(function (){ 
	//cascade(0,5,2);
	var min = prompt("pick a minimum value");
	var max = prompt("pick a maximum value");
	var ty = prompt("How many times do you want to cascade");
	cascade(min,max,ty);
})