
let myLetty = setInterval(myWatch, 1000);

function myWatch() {

 let h = new Date();
  
 let w = h.toLocaleTimeString();
 
 if(w.split(':')[0].length === 1){
  w = `0${w}`;
}

 let j= w.substring(0,2);
 let m= w.substring(3,5);
 let s= w.substring(6,8);
 
  document.getElementById("jam").innerHTML = j;
  document.getElementById("menit").innerHTML = m;
  document.getElementById("detik").innerHTML = s;
}


