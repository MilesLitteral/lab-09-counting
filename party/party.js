function PartyCounter(party)
{
	var tCount = party;
	
	if(tCount == 0)
	{
		alert("PARTY TIME");
	}
	else if(tCount < 0)
	{
		alert("PARTY NOW");
	}
	else
	{
		alert(tCount);
		return(PartyCounter(party - 1));
	}
}

$(document).ready(function (){ 
	var x = prompt("How long till party?")
	PartyCounter(x);
})