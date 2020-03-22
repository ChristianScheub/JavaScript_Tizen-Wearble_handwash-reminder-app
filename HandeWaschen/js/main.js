
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
	
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back") {
			try {
			    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
			}
		}
	});
    

   

    var intervalID = window.setInterval(myCallback, 1000);

   
    
};
function myCallback() {

		
	if(localStorage.getItem('timerAk')=="deaktiv"){
		
	}
	else{
	
	 // führt er alle 1 sekunde aus
	var zeitSek = document.getElementById('zeitSek');
	var text = zeitSek.innerText || zeitSek.textContent;          	
	console.log("Der Wert gerade an Sekunden: " + text);
	var zahl = parseFloat(text);
	if(zahl==0){
		//Sekunden auf 0
		
		var zeitMin = document.getElementById('zeitMin');
		var text = zeitMin.innerText || zeitMin.textContent;          	
		console.log("Der Wert gerade in Minuten: " + text);
		var zahlMin = parseFloat(text);
		zahlMin = zahlMin -1;
		if(zahlMin==-1){
			//Sekunden und Min auf 0
			navigator.vibrate(80);
		
			var timerMin = localStorage.getItem('timerMin');
			console.log("Der Wert: " +timerMin);
			if(timerMin==null){
				console.log("Es gab nichts");
			    zeitSek.innerHTML = "59";
			    zeitMin.innerHTML = "59";
			  
			}
			else{
				console.log("Es gab gespeicherte Variablen");
				zeitMin.innerHTML = timerMin-1;
				zeitSek.innerHTML = 59;
			}
			
			alert("Vergessen sie es nicht ihre Hände zu Waschen!");
		}
		else{
			if(zahlMin<=9){
				zahlMin="0"+zahlMin;
			}
		zeitMin.innerHTML = zahlMin;
		zeitSek.innerHTML = "59";
		}
	}
	else{
		var textSek = zahl-1;
		if(textSek<=9){
			textSek="0"+textSek;
		}
    	zeitSek.innerHTML = textSek; 
	}
	}

}

function ScreenWechseln(){
	var settingsID = document.getElementById('settings');
	var startID = document.getElementById('Start');
	console.log("Wechsel")
	if(localStorage.getItem('setting')=="gradSet"){
		console.log("Wechsel zu Start")
		//settings invisble machen
		localStorage.setItem('setting', "home");
		localStorage.setItem('timerMin', document.getElementById("Input_ZeitMin").value);
		zeitMin.innerHTML = document.getElementById("Input_ZeitMin").value
		document.getElementById("Start").style.display = "block";
		document.getElementById("settings").style.display = "none";
	}
	else{
		//settings anzeigen
		console.log("Wechsel zu Settings")
		localStorage.setItem('setting', "gradSet");
		document.getElementById("settings").style.display = "block";
		document.getElementById("Start").style.display = "none";
	}
}



//Setting Btn:

//Button um Timer zu de-/aktivieren
function Btn_timer(){
	if(localStorage.getItem('timerAk')=="deaktiv"){
		//Timer aktivieren
		document.getElementById("timerButton").src = "img/button_ac.png";
		localStorage.setItem('timerAk', "aktiv");
		document.getElementById("Input_ZeitMin").style.display = "block";
	}
	else{
		//Timer deaktiveren
		document.getElementById("timerButton").src = "img/button_de.png";
		localStorage.setItem('timerAk', "deaktiv");
		document.getElementById("Input_ZeitMin").style.display = "none";
		
	}
	
}

//Button um Bewegungserkennung aktivieren
function errinern(){
	if(localStorage.getItem('bewegungsAk')=="aktiv"){
		// deaktivieren
		document.getElementById("errinernButton").src = "img/button_de.png";
		localStorage.setItem('bewegungsAk', "deaktiv");
	}
	else{
		// aktivieren
		document.getElementById("errinernButton").src = "img/button_ac.png";
		localStorage.setItem('bewegungsAk', "aktiv");
		
	}
	
}
//Button um das Gesicht nicht zu berühren
function gesicht(){
	if(localStorage.getItem('gesichtAK')=="aktiv"){
		// aktivieren
		document.getElementById("gesichtButton").src = "img/button_de.png";
		localStorage.setItem('gesichtAK', "deaktiv");
	}
	else{
		// deaktiveren
		document.getElementById("gesichtButton").src = "img/button_ac.png";
		localStorage.setItem('gesichtAK', "aktiv");
		alert("Hey, sorry dies ist noch nicht implementiert :) ");
		
	}
	
}