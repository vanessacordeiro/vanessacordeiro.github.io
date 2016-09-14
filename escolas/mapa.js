$(document).ready(function(){
		
			var map;
			var centerPos = new google.maps.LatLng(-23.300261, -45.965545);
			var zoomLevel = 12;			
			var mapOptions = {center: centerPos, zoom: zoomLevel}; //DEFININDO A POSICAO INICIAL DO MAPA        
        
			map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );
		
			$.getJSON("https://api.myjson.com/bins/4kaoa",function(data) { //BUSCANDO OS DADOS NO MYJSON
					
					$.each(data, function(i){
						marker = new google.maps.Marker({ //CRIANDO OS MARCADORES NO MAPA
							position: new google.maps.LatLng(this.lat, this.long),
							title: 'Nome: ' + this.Nome,
							map: map,
							icon: 'img/marcador.png'
						});	
					
					
					
					})
			});				
		});