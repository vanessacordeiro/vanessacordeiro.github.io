function initialize() 
{
				
	$.getJSON("https://api.myjson.com/bins/5ab0m",function(data) 
	{
					
					var values = [];
					
					$.each(data, function(i)
					{
						
						values.push("<p>"+this.nome+"</p>");
					});
					
					$("#data").append(values);
	});		
}
initialize();