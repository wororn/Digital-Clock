
let currentTime = new Date();
let day = currentTime.getDate();
let year = currentTime.getFullYear();
let jam= currentTime.getHours();
let menit= currentTime.getMinutes();
let detik= currentTime.getSeconds();
let hari ;
let bulan ;
let dn="AM";

let tag = currentTime.getDay() ; 

if (tag=="0"){
  hari = "Minggu";
  }
 else
if (tag=="1"){
  hari = "Senin";
  }

   else
if (tag=="2"){
  hari = "Selasa";
  }
 else
if (tag=="3"){
  hari = "Rabu";
  }
  
  else
if (tag=="4"){
  hari = "Kamis";
  }
  
 else
if (tag=="5"){
  hari = "Jumat";
  }
  
  else
if (tag=="6"){
  hari = "Sabtu";
  }

let month = currentTime.getMonth() + 1 ;
  
if (month=="1"){
  bulan = "Januari";
  }
else 
if (month=="2"){
  bulan = "Februari";
  }
else
  if (month=="3"){
  bulan = "Maret";
  }
else
if (month=="4"){
  bulan = "April";
  }
  
if (month=="5"){
  bulan = "Mei";
  }

  else
 if (month==6){
  bulan = "Juni";
  }
  else
  
  if (month==7){
  bulan = "Juli";
  }
  else
 if (month==8){
  bulan = "Agustus";
  }
else
 if (month==9){
  bulan = "September";
  }
  else
if (month==10){
  bulan = "Oktober";
  }
else
	if (month==11){
  bulan = "Nopember";
  }
  else
  
  if (month==12){
  bulan = "Desember";
  }
 
 if(jam>12){
 dn="PM";
 jam=jam-12;
 }
 
 if(jam==0){
 dn="AM";
 jam=12;
 }
 
 if (menit<=9){
 menit="0"+menit;
 }
  
 if (detik<=9){
 detik="0"+detik;
 }
 
 
   
document.write(hari + ", " + day + " "  + bulan + " " + year);
 
 