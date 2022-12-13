
const firebaseConfig = {
    apiKey: "AIzaSyByGA988JMPcR9S--mPRqaimwt68nSWh30",
    authDomain: "fir-d238d.firebaseapp.com",
    databaseURL: "https://fir-d238d-default-rtdb.firebaseio.com",
    projectId: "fir-d238d",
    storageBucket: "fir-d238d.appspot.com",
    messagingSenderId: "687475701388",
    appId: "1:687475701388:web:e0284149c22b455fa5eda9"
  };

  // Initialize Firebase
  
  firebase. initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref("shubham kumar");
  firebaseRef.once("value",function(snapshot){
    snapshot.forEach(function(element){
        console.log(element)
    })
  })


  /*//set database variable
  var database = firebase.database()

  function get(){
    var user_ref = database.ref('user/' + 'shubham kumar')
    user_ref.on('value',function(snapshot){
        var data = snapshot.val()
        console.log(data)
    })

    

  }*/

  