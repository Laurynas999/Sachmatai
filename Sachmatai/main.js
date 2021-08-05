		function bigImg(x,figura,spalva,koord) {
			
			vieta = document.getElementById ( "figura");
			
			rodiklis = 1;

			galimybes = new Figura ( new Padetis ( koord ),figura, spalva );
			
			for ( i = 0; i < galimybes.galimuEjimuSkaicius(); i++ ) {
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( i );
				
				
				if (( nauja_padetis != galimybes.padetis_esama )&&(!nauja_padetis.innerHTML))  {
					
					pazymeti_langeli ( nauja_padetis,rodiklis ); 
					
				}
			}
		}
		
		function normalImg(x,figura,spalva,koord) {
			
			vieta = document.getElementById ( "figura");
			vieta.innerHTML =null ;
			 
			rodiklis = 0;
			 
			galimybes = new Figura ( new Padetis ( koord ),figura, spalva );
			 
			for ( i = 0; i < galimybes.galimuEjimuSkaicius(); i++ ) {
			
				nauja_padetis = galimybes.naujaPadetisPagalGalimaEjima ( i );
				
				if /*(*/( nauja_padetis != galimybes.padetis_esama )/*&&(nauja_padetis==""))*/ {
					
					pazymeti_langeli ( nauja_padetis,rodiklis ); 
			
				}
			}
		}
		
		function pazymeti_langeli ( nauja_padetis, rodiklis ){
			
			koordinate =nauja_padetis.horiz +nauja_padetis.vert ;
			
			if (rodiklis >0){
				document.getElementById ( koordinate).style.backgroundColor="blue";
			}else{
				document.getElementById ( koordinate).removeAttribute("style");
			}
		}