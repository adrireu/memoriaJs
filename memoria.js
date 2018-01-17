var array =["a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h"];
	var idCarta1="";
	var carta1 ="";
	var	carta2 ="inicializar";
	var flagCarta1 = true;
	var flagCarta2 =true;
	var pares = 0;
	var audio = new Audio();
	audio.src = "sound.wav";


	function embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;
 
    while (0 !== indice_atual) {
 
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
 
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
		console.log(array[indice_atual]);
    }
 
    return array;
}
	function escolhi(index){
		
		index = index-1;
		if(flagCarta1){
			carta2=array[index];
			flagCarta2=true;
		}else if(flagCarta2==false)
		{
			carta1=array[index];
	
			flagCarta1=true;
			idCarta1=index+1;
			}
		}

		function limparMemoria(){
				flagCarta1=false;
				flagCarta2=false;
				carta1 ="";
				carta2="";
		}

	$(document).ready(function(	) {
		audio.play();


		$.each(array,function(i,value){
			$("#cartas").prepend("<img id ="+(i+1)+" class="+" >");
        });
		$("body").append("<button id ="+"start"+">START!!!</button>");

	$("#start").click(function(){
		$(function (){
			pares = 0;
		array = embaralhar(array);
			
			$.each(array,function(i,value){
				audio.play();
				$("#"+(i+1)+"").hide();
				$("#"+(i+1)+"").attr({src:"img/"+array[i]  +".jpg"});
				$("#"+(i+1)+"").slideDown();
			
        });
				});
							setTimeout(function(){$.each(array,function(i,value){
							
								$("#"+(i+1)+"").hide();
								$("#"+(i+1)+"").attr({src:"img/default.jpg"});							
								$("#"+(i+1)+"").slideDown();
								$("#"+(i+1)+"").fadeIn();
								flagCarta1=false;
								flagCarta2=false;						
							});
						},2000);
			
				});
	
	$(function (){
	    $('#cartas img').click(function(){
			
        var id = $(this).attr('id');
			
			if(flagCarta1==false||flagCarta2==false){
			$("#"+(id)+"").hide();	
		$("#"+(id)+"").attr({src:"img/"+array[id-1]  +".jpg"});
		$("#"+(id)+"").fadeIn();
		$("#"+(id)+"").slideDown();
		escolhi(id);
		audio.play();		
						if(carta1==carta2){
							$("#"+(id)+"").off("click");
							$("#"+(idCarta1)+"").off("click");
							limparMemoria();							
							pares++;
						    
							if(pares==8){
								setTimeout(function() {	alert("Fim de Jogo, Parabens");
								},800);
								pares = 0;
									setTimeout(function(){location.reload();
							},800);
								
							}

						}else if(flagCarta1==true&&flagCarta2==true){
							setTimeout(function(){	
								$("#"+(id)+"").attr({src:"img/default.jpg"});
								$("#"+(idCarta1)+"").attr({src:"img/default.jpg"});
								limparMemoria();													
						},800);
						}					
		}
    });	
});
});
