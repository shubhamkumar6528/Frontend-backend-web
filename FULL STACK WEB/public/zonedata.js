var firebaseConfig = {
    apiKey: "AIzaSyALAmrqXCgCwjaAuMWfoRbKIHhWlGkc-Y0",
    authDomain: "srijansih.firebaseapp.com",
    databaseURL: "https://srijansih-default-rtdb.firebaseio.com",
    projectId: "srijansih",
    storageBucket: "srijansih.appspot.com",
    messagingSenderId: "261355500876",
    appId: "1:261355500876:web:b619a5e9f382c9cb844be9",
    measurementId: "G-2FK9KM18RZ"
  };

  firebase.initializeApp(firebaseConfig);
/*
    firebase.database().ref('currentValue/0').on('value',(sanpshot)=>{
        var a =sanpshot.val().value;
        console.log(a);
      }); 
*/


  

  

  firebase.database().ref('currentValue/0').on('value',(sanpshot)=>{
  var Q1=sanpshot.val().value;
  console.log(Q1);
  //var device1= Q1;
    var mq61=(Q1.toString().substring(1,3));
    var mq71=(Q1.toString().substring(3,5));
    var temp1=(Q1.toString().substring(5,7));
    var humidity1=(Q1.toString().substring(7,9));
    var Flame1=(Q1.toString().substring(9,10));
    var Danger1=(Q1.toString().substring(10,11));
    
   
console.log([mq61,mq71,temp1,humidity1,Flame1, Danger1]);
    generateAlert(mq61,mq71,temp1,humidity1,Flame1, Danger1);
    
    
  })

  var emg="";
  function generateAlert(Methane,Carbonmonoxide,Temperature,Humidity,Fire,cielingcollapse){
    console.log(Methane,Carbonmonoxide,Temperature,Humidity,Fire,cielingcollapse);
    if(Methane > 40){
        emg += "High Gas"+ "  ";
    
    }
    if(Carbonmonoxide>40){
        emg += "Carbon Monoxide" +"  ";
    }
    
    
    if(Temperature>55){
        emg += "High Temperature" +"  ";
    }
    
    if(Humidity>60){
        emg += "High Moisture"+"  " ;

    
    }
    /*
    if(Fire==0){
        emg +="fire"
    }*/
    if(cielingcollapse==1){
        emg +="cielling collapse " + "  ";
    }
    
    if(cielingcollapse==2){
        emg +="Flood" + "  ";
    }
    if(cielingcollapse==3){
        emg +="Minehaulage" + "  ";
    }
    
myFunction(emg)
AddItemToTable(Methane,Carbonmonoxide,Temperature,Humidity,Fire,cielingcollapse);
    console.log(emg)

  }
  


  function myFunction(msg) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML=msg;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
  }

  var stdNo=0;
    

    function AddItemToTable(Methane1,Carbonmonoxide1,Temperature1,Humidity1,Fire1,cielingcollapse1){
        document.getElementById("M").innerHTML=Methane1;
        if(Methane1 >40 )
        {
            document.getElementById("M").style.backgroundColor= "red";
        }
        else{
            document.getElementById("M").style.backgroundColor= "#90ee90";
        }
        document.getElementById("C").innerHTML=Carbonmonoxide1;
        if(Carbonmonoxide1>40 )
        {
            document.getElementById("C").style.backgroundColor= "red";
        }
        else{
            document.getElementById("C").style.backgroundColor= "#90ee90";
        }
        document.getElementById("T").innerHTML=Temperature1;
        if(Temperature1 >55 )
        {
            document.getElementById("T").style.backgroundColor = "red";
        }
        else{
            document.getElementById("T").style.backgroundColor= "#90ee90";
        }
        document.getElementById("H").innerHTML=Humidity1;
        if(Humidity1 >60 )
        {
            document.getElementById("H").style.backgroundColor = "red";
        }
        else{
            document.getElementById("H").style.backgroundColor= "#90ee90";
        }
        if(Fire1 == 1){
            document.getElementById("F").style.backgroundColor  = "#90ee90";
        } 
        //document.getElementById("F").innerHTML=Fire1;
        if(Fire1 == 0 )
        {
            document.getElementById("F").style.backgroundColor  = "#90ee90";
        }
        if(cielingcollapse1==1){
             document.getElementById("CE").innerHTML="YES";
             document.getElementById("CE").style.backgroundColor = "red";
        }
        else{
            document.getElementById("CE").style.backgroundColor= "#90ee90";
        }
       if(cielingcollapse1==3){
        document.getElementById("MI").innerHTML="YES";
        document.getElementById("MI").style.backgroundColor = "red";
       }
       else{
        document.getElementById("MI").style.backgroundColor= "#90ee90";
    }
         
        // let q4 = document.createElement("q4");
        
        // q1.innerHTML= ++stdNo;

    }
            