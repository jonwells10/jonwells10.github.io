var config = {
    apiKey: "AIzaSyBOb6QVJtKSS9pu5rnW9A9WXxD66t_0cCM",
    authDomain: "train-schedule-cd174.firebaseapp.com",
    databaseURL: "https://train-schedule-cd174.firebaseio.com",
    projectId: "train-schedule-cd174",
    storageBucket: "",
    messagingSenderId: "928352694407"
  };

  firebase.initializeApp(config);

  let database = firebase.database();

  $(document).ready(function (){
      $('#submit').on('click', function(ev){
            console.log('was clicked');
            ev.preventDefault();

            let train = $('#train-input').val();
            let destination = $('#destination-input').val();
            let time = $('#time-input').val();
            let frequency = $('#frequency-input').val();

            console.log(train);
            console.log(destination);
            console.log(typeof(time))

            database.ref().push({
                train: train,
                destination: destination,
                time: time,
                frequency: frequency
      })
    
    })
  })


  database.ref().on('child_added', function (snapshot) {

    let newTrain = snapshot.val()

    let timeObj = moment(newTrain.time, 'HH:mm');
    console.log(timeObj);
    let minsAway = moment().diff(timeObj, 'HH:mm')
    console.log(minsAway)
 

    let trainTd = $('<td>' + newTrain.train + '</td>')
    let destinationTd = $('<td>' + newTrain.destination + '</td>')
    let timeTd = $('<td>' + newTrain.time + '</td>')
    let frequencyTd = $('<td>' + newTrain.frequency + '</td>')
    let minsTd = $('<td>' + minsAway + '</td>')
    

    let row = $('<tr>');
    row.append(trainTd)
    row.append(destinationTd)
    row.append(timeTd)
    row.append(frequencyTd)
    row.append(minsTd)
    

    $('#table-body').append(row);

})





