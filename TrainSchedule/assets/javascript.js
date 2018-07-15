var trainData = {
    apiKey: "AIzaSyBOb6QVJtKSS9pu5rnW9A9WXxD66t_0cCM",
    authDomain: "train-schedule-cd174.firebaseapp.com",
    databaseURL: "https://train-schedule-cd174.firebaseio.com",
    projectId: "train-schedule-cd174",
    storageBucket: "",
    messagingSenderId: "928352694407"
  };
// var trainData = new Firebase("https://train-schedule-cd174.firebaseio.com/");


  firebase.initializeApp(trainData);

  let database = firebase.database();

  $("#addTrainBtn").on("click", function(){

    // Grabs user input
    var trainName = $("#train-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrainUnix = moment($("#time-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
    var frequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name:  trainName,
      destination: destination,
      firstTrain: firstTrainUnix,
      frequency: frequency
    }
  
    // Uploads train data to the database
    trainData.push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination); 
    console.log(firstTrainUnix);
    console.log(newTrain.frequency)
  
    // Alert
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");
  
    // Determine when the next train arrives.
    return false;
  });
  
  
  // 4. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  newTrain.on("child_added", function(childSnapshot, prevChildKey){
  
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tFrequency = childSnapshot.val().frequency;
    var tFirstTrain = childSnapshot.val().firstTrain;
  
    // Calculate the minutes until arrival using hardcore math
    // To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time and find the modulus between the difference and the frequency  
    var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
    var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ;
    var tMinutes = tFrequency - tRemainder;
  
    // To calculate the arrival time, add the tMinutes to the currrent time
    var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 
    console.log(tMinutes);
    console.log(tArrival);
  
    console.log(moment().format("hh:mm A"));
    console.log(tArrival);
    console.log(moment().format("X"));
  
    // Add each train's data into the table 
    $("#trainTable > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
  
  });





//   $(document).ready(function (){
//       $('#submit').on('click', function(ev){
//             console.log('was clicked');
//             ev.preventDefault();

//             let trainName = $('#train-input').val();
//             let destination = $('#destination-input').val();
//             let firstTrainTime = $('#time-input').val();
//             let frequency = $('#frequency-input').val();

//             console.log(train);
//             console.log(destination);
//             console.log(firstTrainTime)

//             database.ref().push({
//                 trainName: trainName,
//                 destination: destination,
//                 firstTrainTime: firstTrainTime,
//                 frequency: frequency
//       })
    
//     })
//   })


//   database.ref().on('child_added', function (snapshot) {
//     console.log(snapshot.val());

//     let trainName = snapshot.val();
//     let destination = snapshot.val();
//     let firstTrainTime = snapshot.val();
//     let frequency = snapshot.val();


//     let firstTrainMoment = moment(firstTrainTime, 'HH:mm');
//     let nowMoment = moment(); // creates a moment object of current date and time and storing it in a variable whenever the user click the submit button

//     let minutesSinceFirstArrival = nowMoment.diff(firstTrainMoment, 'minutes');
//     let minutesSinceLastArrival = minutesSinceFirstArrival % frequency;
//     let minutesAway = frequency - minutesSinceLastArrival;

//     let nextArrival = nowMoment.add(minutesAway, 'minutes');
//     let formatNextArrival = nextArrival.format("HH:mm");

//     let timeObj = moment(trainName.time, 'HH:mm');
//     console.log(timeObj);
//     let minsAway = moment(timeObj, 'HH:mm').fromNow('mins')
//     console.log(minsAway);
 

//     let trainTd = $('<td>' + trainName.train + '</td>')
//     let destinationTd = $('<td>' + trainName.destination + '</td>')
//     let firstTrainTimeTd = $('<td>' + nextArrival.time + '</td>')
//     let frequencyTd = $('<td>' + trainName.frequency + '</td>')
//     let minTd = $('<td>' + minutesAway + '</td>')
    

//     let row = $('<tr>');
//     row.append(trainTd)
//     row.append(destinationTd)
//     row.append(frequencyTd)
//     row.append(firstTrainTimeTd)
//     row.append(minTd)
    

//     $('#table-body').append(row);

// })
