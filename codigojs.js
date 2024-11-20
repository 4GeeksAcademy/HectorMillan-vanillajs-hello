function generarEscusas(){
    var excusa = "";

    let who = ['The cat','My granma','My girldfriend','My mother'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my computer', 'my phone', 'the car'];
    let when = ['this morning','right in time','when I fell asleep','at the party last night','when I had breakfast'];

    excusa = who[Math.floor(Math.random()*who.length)] + " " +  action[Math.floor(Math.random()*who.length)] + " " +what [Math.floor(Math.random()*what.length)] + " " + when [Math.floor(Math.random()*when.length)];
    
    document.getElementById("excuse").innerHTML = excusa;
  
    
}

