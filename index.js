function newtime(){
     var time= new Date();
     var hour= time.getHours();
     
     var min= time.getMinutes();

     var second= time.getSeconds();
     
      var ampm=(hour<12)? "AM":"PM";
     
     hour=(hour>12)? hour-12:hour;
     min=(min<10)? "0"+min:min;
     second=(second<10)?"0"+second:second;
     document.getElementById("hours").innerHTML=hour;
     document.getElementById("mins").innerHTML=min;
     document.getElementById("secs").innerHTML=second;
     document.getElementById("ampm").innerHTML=ampm;
    var t = setTimeout(newtime,1000)
    if((hour>=7)&&(hour<12)&&(ampm=="AM")){
         document.getElementById("block1").innerHTML="LET'S HAVE BREAKFAST";
         document.getElementById("img1").innerHTML= `<img src="./breakfast.jpg"  width="350px" height="300px" alt="">`
         document.getElementById("message").innerHTML="GOOD MORNING !!!";
    }
    else if((hour>=12)&&(ampm=="PM")||(hour<4)){
       document.getElementById("block1").innerHTML="LET'S HAVE LUNCH";
       document.getElementById("img1").innerHTML= `<img src="./lunch.jpg"  width="350px" height="300px" alt="">`
       document.getElementById("message").innerHTML="GOOD AFTERNOON !!!";
    }
    else if((hour>=4)&&(hour<=8)&&(ampm=="PM")){
       document.getElementById("block1").innerHTML="LET'S HAVE DINNER";
       document.getElementById("img1").innerHTML= `<img src="./dinner.png"  width="350px" height="300px" alt="">`
       document.getElementById("message").innerHTML="GOOD EVENING!!!";
    }
    else{
       document.getElementById("block1").innerHTML="LET'S GO TO SLEEP";
       document.getElementById("img1").innerHTML= `<img src="./nap1.jpg"  width="350px" height="300px" alt="">`
       document.getElementById("message").innerHTML="GOOD NIGHT!!!";
    }
}
function addText(){

     var hiddenbox= document.getElementById("hide")
     hiddenbox.style.opacity=1;

    var a=document.getElementById("down1")
    var valid1=a.options[a.selectedIndex].text;
    var valid2=a.options[a.selectedIndex].value;
    var val1=valid2.slice(0,2);
    var myvald1=valid2.slice(-2);
    console.log(valid1);
    console.log(valid2);

    var b=document.getElementById("down2")
    var valid3=b.options[b.selectedIndex].text;
    var valid4=b.options[b.selectedIndex].value;
    var val2=valid4.slice(0,2);
    var myvald2=valid4.slice(-2);
    console.log(valid3);
    console.log(valid4);

    var c=document.getElementById("down3")
    var valid5=c.options[c.selectedIndex].text;
    var valid6=c.options[c.selectedIndex].value;
    var val3=valid6.slice(0,2);
    var myvald3=valid6.slice(-2);
    console.log(valid5);
    console.log(valid6);


   var present = document.getElementById("newcard")
   if(present){
        present.innerHTML=`set wakeup time:${valid1} <br> set lunch time:${valid3} <br> set nap time:${valid5}`
   }
   else{
     var newone = document.createElement("div");
     newone.setAttribute("id","newcard");
     newone.innerHTML = `set wakeup time : ${valid1} <br> set lunch time : ${valid2} <br> set nap time: ${valid3}`;
     hiddenbox.appendChild(newone);

   }

   var time= new Date();
     var hour= time.getHours();
     
     var min= time.getMinutes();

     var second= time.getSeconds();
     
      var ampm=(hour<12)? "AM":"PM";
     
     hour=(hour>12)? hour-12:hour;
     min=(min<10)? "0"+min:min;
     second=(second<10)?"0"+second:second;
     document.getElementById("hours").innerHTML=hour;
     document.getElementById("mins").innerHTML=min;
     document.getElementById("secs").innerHTML=second;
     document.getElementById("ampm").innerHTML=ampm;
    var t = setTimeout(newtime,1000)

    if((val1==hour)&&(myvald1==ampm)){
     document.getElementById("block1").innerHTML="LET'S HAVE BREAKFAST";
     document.getElementById("img1").innerHTML= `<img src="./breakfast.jpg"  width="350px" height="300px" alt="">`
     document.getElementById("message").innerHTML="GOOD MORNING !!!";
}
else if((val2==hour)&&(myvald2==ampm)){
   document.getElementById("block1").innerHTML="LET'S HAVE LUNCH";
   document.getElementById("img1").innerHTML= `<img src="./lunch.jpg"  width="350px" height="300px" alt="">`
   document.getElementById("message").innerHTML="GOOD AFTERNOON !!!";
}
else if((val3==hour)&&(myvald3==ampm)){
   document.getElementById("block1").innerHTML="LET'S HAVE DINNER";
   document.getElementById("img1").innerHTML= `<img src="./dinner.png"  width="350px" height="300px" alt="">`
   document.getElementById("message").innerHTML="GOOD EVENING!!!";
}
else{
   document.getElementById("block1").innerHTML="LET'S GO TO SLEEP";
   document.getElementById("img1").innerHTML= `<img src="./nap1.jpg"  width="350px" height="300px" alt="">`
   document.getElementById("message").innerHTML="GOOD NIGHT!!!";
}
}


