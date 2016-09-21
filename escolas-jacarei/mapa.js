$(document).ready(function(){
			
			$("#search").click(function() {
			
				
				$.getJSON("https://api.myjson.com/bins/1ozje",function(data) {
					
					var values = [];
					
					$.each(data, function(i){
						
						values.push("<p>"+this.nome+"</p>");
					});
					
					$("#data").append(values);
					
			});
   });	
});