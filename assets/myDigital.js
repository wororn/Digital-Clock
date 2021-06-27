let myLet = setInterval(myClock, 1000);

function myClock() {

 let d = new Date();
  
 let t = d.toLocaleTimeString();

 if(t.split(':')[0].length === 1){
    t = `0${t}`;
}

 let tu= t.substring(0,1);
 let wa= t.substring(1,2);
 let ga= t.substring(3,4);
 let pat= t.substring(4,5);
 let ma= t.substring(6,7);
 let nam= t.substring(7,8);
 
document.images.namedItem("satu").src="./images/"+tu+".gif";
document.images.namedItem("dua").src="./images/"+wa+".gif";
document.images.namedItem("tiga").src="./images/"+ga+".gif";
document.images.namedItem("empat").src="./images/"+pat+".gif";
document.images.namedItem("lima").src="./images/"+ma+".gif";
document.images.namedItem("enam").src="./images/"+nam+".gif";
}