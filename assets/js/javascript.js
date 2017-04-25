function play() {
    document.getElementById('reproductor').play();    
}

function pause(){
    document.getElementById('reproductor').pause();
}

function aumentarVolumen(){
   document.getElementById('reproductor').volume+=0.1;  
}

function disminuirVolumen(){
   document.getElementById('reproductor').volume-=0.1; 
}

function stop(){
    document.getElementById('reproductor').pause();
    document.getElementById('reproductor').currentTime = 0; 
}

function avanzar(){
    document.getElementById('reproductor').currentTime += 5; 
}

function retroceder(){
    document.getElementById('reproductor').currentTime -= 5; 
}