/*var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx,{
    type:"line",
    data:{
        labels:["mq6","mq7","temperature","humadity","flamesensor","danger"],
        datasets:[
            {
                data: [13,15,5,10,9,10],
                label:"Realtime Data"

            },
        ],
    },
});*/



    // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyByGA988JMPcR9S--mPRqaimwt68nSWh30",
    authDomain: "fir-d238d.firebaseapp.com",
    databaseURL: "https://fir-d238d-default-rtdb.firebaseio.com",
    projectId: "fir-d238d",
    storageBucket: "fir-d238d.appspot.com",
    messagingSenderId: "687475701388",
    appId: "1:687475701388:web:e0284149c22b455fa5eda9"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref('device1/d1').on('value',(sanpshot)=>{
  var a=sanpshot.val();
    var mq6=(a.toString().substring(1,3));
    var mq7=(a.toString().substring(3,5));
    var temp=(a.toString().substring(5,7));
    var humidity=(a.toString().substring(7,9));
    var Flame=(a.toString().substring(9,10));
    var Danger=(a.toString().substring(10,11));


    // /myFunction([mq6,mq7,temp,humidity,Flame]);
    // console.log(sanpshot.val())
    
  })

  function myFunction(p1) {

    console.log(p1);


   
  


var k=p1;
var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx,  {
  // Type of Chart - bar, line, pie, doughnut, radar, polarArea
  type: "bar",

  // The data for our dataset
   data: {
    // Data Labels
    labels: ["MQ6", "MQ7", "TEMPERATURE", "HUMIDITY", "FLAME", "DANGER"],

    datasets: [
      // Data Set 1
      {
        //  Chart Label
        label: "Realtime Data",
        


        // Actual Data
         data : k,
        
        

        

        // Background Color
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        // Border Color
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        // Border Width
        borderWidth: 1,
      },

      // Data Set 2
      // {
      //   //  Chart Label
      //   label: "Framework",

      //   // Actual Data
      //   data: [10, 8, 3, 7, 8, 9],

      //   // Background Color
      //   backgroundColor: [
      //     "rgba(255, 97, 132, 0.2)",
      //     "rgba(54, 16, 235, 0.2)",
      //     "rgba(255, 26, 86, 0.2)",
      //     "rgba(75, 12, 192, 0.2)",
      //     "rgba(153, 2, 255, 0.2)",
      //     "rgba(255, 19, 64, 0.2)",
      //   ],
      // },
    ],
  },

  // Configuration options go here
  options: {
    // Set Responsiveness By Default Its True
    // When Its True Canvas Width Height won't work
    responsive: true,

    // Set Padding
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    // Configure ToolTips
    tooltips: {
      enabled: true, // Enable/Disable ToolTip By Default Its True
      backgroundColor: "#ADD8E6", // Set Tooltip Background Color
      titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
      titleFontSize: 30, // Set Tooltip Font Size
      titleFontStyle: "bold italic",
      titleFontColor: "yellow",
      titleAlign: "center",
      titleSpacing: 3,
      titleMarginBottom: 50,
      bodyFontFamily: "Comic Sans MS",
      bodyFontSize: 20,
      bodyFontStyle: "italic",
      bodyFontColor: "black",
      bodyAlign: "center",
      bodySpacing: 3,
    },

    // Custom Chart Title
    title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
      fontSize: 25,
      fontFamily: "Comic Sans MS",
      fontColor: "red",
      fontStyle: "bold italic",
      padding: 20,
      lineHeight: 5,
    },

    // Legends Configuration
    legend: {
      display: true,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "red",
        fontSize: 16,
        boxWidth: 20,
      },
    },
/*
    animation: {
      duration: 5000,
      easing: "easeInOutBounce",
    },*/

    // We have Three Events - events which take string array, onHover and Onclick which take function
    // Example of events
    // This chart will not respond to mousemove, etc
    // mousemove, mouseout, click, touchstart, touchmove
    // events: ["click"],

    // onClick Example
    // onClick: function () {
    //   console.log("On Click");
    // },

    // onHover Example - It will work
    // onHover: function () {
    //   console.log("On Hover");
    // },
  },
});


// return p1 * p2;   // The function returns the product of p1 and p2
}