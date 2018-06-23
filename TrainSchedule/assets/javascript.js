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
            let train = $('#destination-input').val();
            let train = $('#time-input').val();
            let train = $('#frequency-input').val();

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

    let train = snapshot.val()

    let timeObj = moment(train.time, 'HH:mm');
    console.log(dateObj);
    let numMonths = moment().diff(timeObj, 'HH:mm')
    console.log(minsAway)
    let rate = parseInt(train.time);
    let total = timeObj - currentTime;

    let nameTd = $('<td>' + train.name + '</td>')
    let destinationTd = $('<td>' + train.destination + '</td>')
    let timeTd = $('<td>' + train.time + '</td>')
    let frequencyTd = $('<td>' + train.frequency + '</td>')
    let minsTd = $('<td>' + minsAway + '</td>')
    

    let row = $('<tr>');
    row.append(nameTd)
    row.append(destinationTd)
    row.append(timeTd)
    row.append(frequencyTd)
    row.append(minsTd)
    row.append(totalTd)

    $('#table-body').append(row);

})





