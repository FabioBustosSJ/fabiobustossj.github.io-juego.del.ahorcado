/*
=====================
PROYECTO A PRESENTAR
=====================
*/
let horas;
let anchoPantalla, altoPantalla;
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var eUpp;
var revocar = false;
var arrAuxiliar = [];	
var contRepetidos = 0;
var teclaPresionada = 0;
var band = false;
var mitad_longitud = 0;
var coincidencias = 0;
var posicionX = pantalla.width / 2;
var posicionY = 450;
var e;
var contador;
var palabrasGuardadas = ["usb","computadora", "teclado",
 "monitor", "gato", "perro", "elefante", "dragon",
 "heladera", "horno", "televisor"];
aMayusculas(palabrasGuardadas);

//-------------------------

// Ganaste!!!
function ganaste(){
	var posi = pantalla.width / 6;
	pincel.textAlign = "center";
	if (anchoPantalla > 600){
		pincel.font='30pt "Verdana"';
		pincel.fillStyle = "blue";
	}else{
		pincel.font='bold 40pt Comic Sans MS';
		pincel.fillStyle = "blue";
	}
	pincel.fillText("¡FELICIDADES!",posi * 4.5, 200);
	pincel.fillText("¡HAS GANADO!",posi * 4.5, 250);
}

//-------------------------

// Game Over
function gameOver(){
	var posi = pantalla.width / 6;
	pincel.textAlign = "center";
	
	pincel.font="bold 40pt Gill Sans";
	pincel.fillStyle = "red";
	pincel.fillText("Game Over!",posi * 4, 200);
}

//------------------------

function aMayusculas(p){
	for(i = 0; i < p.length; i++){
		p[i] = p[i].toUpperCase();
	}
}

//-------------------------

function letra(c, x, y){
	console.log("Valor de AP ", anchoPantalla);
	if (anchoPantalla >= 600){
		pincel.font="26pt Verdana";
		pincel.fillStyle = "gray";
		pincel.fillText(c,x+10,y-5); //x+5
	}else{
		pincel.font="bold 22pt Verdana";
		pincel.fillStyle = "gray";
		pincel.fillText(c,x+10,y-5);
	}
}

//-------------------------

function guion(x, y){	
	pincel.strokeStyle = "white";
	pincel.beginPath();
	pincel.moveTo(x,y);
	if (anchoPantalla >= 600){
		pincel.lineTo(x+30,y);		//25
	}else{
		pincel.lineTo(x+40,y);
	}
	pincel.stroke();
}

//-------------------------

function seleccionarPalabra(p){
	var sele;
	sele = Math.floor(Math.random()*p.length);
	return sele;
}

//-------------------------

function escribirGuiones(p,ejeX){
	console.log(p);
	var longitud = p.length;
	mitad_longitud = (longitud / 2);//Math.floor
	for (var i = 0; i < longitud; i++){
		guion(ejeX - (mitad_longitud * 50), posicionY);
		ejeX = ejeX + 50;
	}
}

//-------------------------

function recorrer(ee2,auxi){
	var cont = 0;
	for(i = 0; i < auxi.length; i++){
			if(ee2 == auxi[i]){
				cont++;
			}
	}
	return cont;
}

//-------------------------

function escribirPalabra(palabra,ejeX){
	escribirGuiones(palabra,ejeX);
	coincidencias = 0;
	contador = 0;	
	var eUpp;
	arrAuxiliar = [];	
	contRepetidos = 0;
	teclaPresionada = 0;
	band = false;

	if(revocar){

	var auxX = Math.floor(pantalla.width / 3);
	if(revocar){
		window.onkeydown = (e) => {
			eUpp = e.key.toUpperCase();
			arrAuxiliar.push(eUpp);
			
			teclaPresionada = recorrer(eUpp,arrAuxiliar);
			
			if((palabra.length != 0) && (revocar)){
				for(i = 0; i < palabra.length; i++){
					if ((eUpp == palabra[i]) && (teclaPresionada == 1)){					
						letra(palabra[i], ejeX - (mitad_longitud * 50), posicionY);
						band = true;
						coincidencias++;
					}
					ejeX = ejeX + 50;
				}
			}
			
			if(teclaPresionada > 1){
				band = true;			
			}

			if((coincidencias == palabra.length) &&
				 (palabra.length != 0)){
				if(revocar){
					ganaste();
					band = true;
					revocar = false;
				}

			} else {
			
				if ((band == false) && (contador < 9)){				
					if(revocar){
						letra(eUpp, auxX, posicionY + 50);
						auxX = auxX + 50;
						contador++;			
						horca(contador);
						if (contador >= 9){
							gameOver();
							palabra = "";
							revocar = false;
						}
					}
				}
			}
			ejeX = pantalla.width / 2;
			band = false;
		};
		}else{
			window.onkeydown = (e) => {
				eUpp = "";
			};
		}
		
		coincidencias = 0;
	}	
}

//-------------------------

function agregarPalabra(){
	var a = palabrasGuardadas;

	var	n = document.querySelector(".texto");
	console.log("Valor de n ",n.value);
	if (n.value != ""){
		n.value = n.value.toUpperCase();
		a.push(n.value);
		document.querySelector(".texto").value = "";
		for(var i = 0; i < a.length; i++){
			console.log(a[i]);
		}
		
		iniciar();
	}else{
		(alert("Campo vacío! Agregue una palabra"));
	}
}

//-----------------------

function horaYFecha(){
            var diaYHora = new Date();
            horas = diaYHora.getHours();

            console.log("ES LA HORA ",horas);
        }

//-----------------------

function dimension(){
	anchoPantalla = document.documentElement.clientWidth;
	altoPantalla = document.documentElement.clientHeight;
	console.log(anchoPantalla);
	horaYFecha();
}

//-------------------------

function iniciar(){
	limpiarPantalla();
	document.querySelector(".titulo").style.display = "none";
	document.querySelector(".agregarPalabra").style.display = "none";
	document.querySelector(".menuPpal").style.display = "none";
	document.querySelector(".copy").style.display = "none";
	if (anchoPantalla < 600) {
		console.log("Ventana menor de 600 px");
		document.querySelector(".menuDeJuego").style.display = "flex";
		document.querySelector(".menuDeJuego").style.flexDirection = "column";
		document.querySelector(".menuDeJuego").style.alignItems = "center";
		document.querySelector(".menuDeJuego").style.marginLeft = "-15px";
	}else{
		console.log("Ventana mayor a 600 px");
		document.querySelector(".menuDeJuego").style.display = "inline-block";
	}
	
	resetear();
	revocar = true;
	horca_base();
	var posElegida = seleccionarPalabra(palabrasGuardadas);
	var palabraElegida = palabrasGuardadas[posElegida];
	console.log("Palabra Elegida ",palabraElegida);
	escribirPalabra(palabraElegida,posicionX);
}

//-------------------------

function agregar(){
	limpiarPantalla();
	resetear();	
	document.querySelector(".titulo").style.display = "none";
	document.querySelector(".menuPpal").style.display = "none";
	document.querySelector(".copy").style.display = "none";
	if (anchoPantalla < 600){
		document.querySelector(".agregarPalabra").style.display = "flex";
		document.querySelector(".agregarPalabra").style.flexDirection = "column";
		document.querySelector(".agregarPalabra").style.alignItems = "center";
	}else{
		document.querySelector(".agregarPalabra").style.display = "inline-block";
	}
	document.querySelector(".texto").focus();
	agregarPalabra;
}

//-------------------------

function cancelar(){
	document.querySelector(".titulo").style.display = "flex";
	document.querySelector(".titulo").style.flexDirection = "column";
	document.querySelector(".titulo").style.alignItems = "center";
	document.querySelector(".menuPpal").style.display = "inline-block";
	document.querySelector(".copy").style.display = "flex";
	document.querySelector(".agregarPalabra").style.display = "none";	
	resetear();
	console.log("REVOCAR: ",revocar);
}

//-------------------------

function desistir(){
	limpiarPantalla();
	document.querySelector(".titulo").style.display = "flex";
	document.querySelector(".menuPpal").style.display = "inline-block";
	document.querySelector(".copy").style.display = "flex";
	document.querySelector(".menuDeJuego").style.display = "none";
	resetear();
	console.log("REVOCAR: ",revocar);
}

//-------------------------

function resetear(){
	revocar = false;
	coincidencias = 0;
}