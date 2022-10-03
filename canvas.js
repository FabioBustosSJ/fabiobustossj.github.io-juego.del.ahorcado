var gr;

//Limpiar Pantalla
function limpiarPantalla(){
  pincel.clearRect(0,0,1200,600);
}

//Soga
function soga(){
	gr = pincel.createLinearGradient(0, 250, 220, 50);
	gr.addColorStop(0, "dimgray");
	gr.addColorStop(0.5, "silver");
	gr.addColorStop(1, "gray");

	pincel.fillStyle = gr;
	pincel.beginPath();
	pincel.moveTo(600,20);
	pincel.lineTo(595,20);
	pincel.lineTo(595,90);
	pincel.lineTo(605,90);
	pincel.lineTo(605,20);
	pincel.fill();
}

//Cabeza
function cabeza(){
	pincel.fillStyle = "azure";
	pincel.beginPath();
	pincel.arc(600,112,30,0,2*3.14);
	pincel.fill();
}

//Tronco
function tronco(){
	pincel.fillStyle = "azure";
	pincel.beginPath();
	pincel.moveTo(595,100);
	pincel.lineTo(605,100);
	pincel.lineTo(605,250);
	pincel.lineTo(595,250);
	pincel.lineTo(595,100);
	pincel.fill();
}

//Brazos
function brazo_1(){
	pincel.fillStyle = "azure";
	pincel.beginPath();
	pincel.moveTo(600,170);
	pincel.lineTo(602,165);
	pincel.lineTo(652,205);
	pincel.lineTo(650,215);
	pincel.lineTo(602,175);
	pincel.fill();
}
function brazo_2(){
	pincel.fillStyle = "azure";
	pincel.beginPath();
	pincel.moveTo(600,170);
	pincel.lineTo(598,165);
	pincel.lineTo(548,205);
	pincel.lineTo(550,215);
	pincel.lineTo(602,175);
	pincel.fill();
}

//Piernas
function pierna_1(){
	pincel.fillStyle = "azure";
	pincel.beginPath();
	pincel.moveTo(600,250);
	pincel.lineTo(602,245);
	pincel.lineTo(652,285);
	pincel.lineTo(650,295);
	pincel.lineTo(600,255);
	pincel.fill();
}
function pierna_2(){
	pincel.fillStyle = "azure";
	pincel.beginPath();
	pincel.moveTo(600,250);
	pincel.lineTo(598,245);
	pincel.lineTo(548,285);
	pincel.lineTo(550,295);
	pincel.lineTo(600,255);
	pincel.fill();
}

//Horca Estructura

function horca_base(){
	gr = pincel.createLinearGradient(0, 250, 120, 50);
	gr.addColorStop(0, "silver");
	//gr.addColorStop(0.5, "grey");
	gr.addColorStop(1, "dimgray");
	
	pincel.fillStyle = gr;
	pincel.fillRect(350,370,300,20);
}

function horca_pilar(){
	gr = pincel.createLinearGradient(0, 250, 220, 50);
	gr.addColorStop(0, "dimgray");
	gr.addColorStop(0.5, "silver");
	gr.addColorStop(1, "gray");

	pincel.fillStyle = gr;
	pincel.fillRect(370,20,20,350);
}

function horca_superior(){
	gr = pincel.createLinearGradient(0, 250, 0, 0);
	gr.addColorStop(0, "dimgray");
	gr.addColorStop(0.5, "silver");
	gr.addColorStop(1, "gray");

	pincel.fillStyle = gr;
	pincel.fillRect(370,20,250,15);
	pincel.beginPath();
	pincel.moveTo(375,100);
	pincel.lineTo(370,85);
	pincel.lineTo(420,20);
	pincel.lineTo(425,30);
	pincel.lineTo(375,100);
	pincel.fill();	
}

function horca(c){
	switch (c){
		case 1:
			horca_pilar();			
			break;
		case 2:
			horca_superior();			
			break;
		case 3:
			soga();
			break;
		case 4:
			cabeza();
			break;
		case 5:
			tronco();
			break;
		case 6:
			brazo_1();
			break;
		case 7:
			brazo_2();
			break;
		case 8:
			pierna_1();
			break;
		case 9:
			pierna_2();
			break;
	}
}