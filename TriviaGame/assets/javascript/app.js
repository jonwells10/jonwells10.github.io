var triviaQuestions = [{
	question: "I'm trying to right my wrongs, but it's funny those same wrongs helped me write this song.",
	answerList: ["Kanye West", "Lil Wayne", "Lil Kim", "Common"],
	answer: 0
},{
	question: "Instead of war on poverty, they got a war on drugs so the police can bother me.",
	answerList: ["Kid Cudi", "Eazy E", "2Pac", "Big L"],
	answer: 2
},{
	question: "In fact, I'm downin' this D'USSÉ with my boo bae, tastes like Kool-Aid for the analysts.",
	answerList: ["J. Cole", "Nas", "Kendrick Lamar", "Dr. Dre"],
	answer: 2
},{
	question: "I got enimies, got alot of enimies. Got a lot of people tryin' to drain me of this energy.",
	answerList: ["Eminem", "Drake", "Jay-Z", "Missy Elliot"],
	answer: 1
},{
	question: "I keep my twisted grill, just to show them kids it's real. We ain't picture perfect but we worth the picture still",
	answerList: ["J Cole", "Big Boi", "Paul Wall", "Juvenile"],
	answer: 0
},{
	question: "Every day you wake up your destiny depends on what you do. Sometimes I roll up when I'm stressed out and sometimes I roll two",
	answerList: ["Brother Ali", "Lil Pump", "Snoop Dogg", "Wiz Khalifa"],
	answer: 3
},{
	question: "I'm not a business man, I'm a business man! Let me handle my business, damn!",
	answerList: ["Notorious BIG", "Jay Z", "Kendrick Lamar", "Big Sean"],
	answer: 1
},{
	question: "Is it worth it? Let me work it. I put my thing down, flip it and reverse it",
	answerList: ["Missy Elliot", "Cardi B", "Mystikal", "Nicki Minaj"],
	answer: 0
},{
	question: "I let my tape rock til my tapped popped.  Smokin' weed in bamboo, sipping on private stock.",
	answerList: ["LL Cool J", "Big L", "Lil Wayne", "Notorious BIG"],
	answer: 3
},{
	question: "You never been on a ride like this before. With a producer who can rap and control the maestro",
	answerList: ["Snoop Dogg", "Shaq", "Dr. Dre", "Ice T"],
	answer: 2
},{
	question: "Just waking up in the morning gotta thank God. I don't know but today seems kinda odd",
	answerList: ["Ice T", "Ice Cube", "Coolio", "Snoop Dogg"],
	answer: 1
},{
	question: "Anytime you want to pick up the telephone. You know it ain't nothin' to drop a couple stacks on you",
	answerList: ["T.I.", "50 Cent", "Lil Wayne", "Birdman"],
	answer: 0
},{
	question: "We only humans girl we make mistakes, to make it up I do whatever it take. I love you like a fat kid love cake",
	answerList: ["50 Cent", "T.I.", "Jay Z", "Eminem"],
	answer: 0
},{
	question: "Lodi dodi we came to party. We don't cause trouble we don't bother nobody",
	answerList: ["DMX", "Snoop Dogg", "Lil Wayne", "Drake"],
	answer: 1
},{
	question: "His palms are sweaty, knees weak, arms are heavy. There's vomit on his sweater already, mom's spaghetti ",
	answerList: ["Will Smith", "2Pac", "Young Jeezy", "Eminem"],
	answer: 3
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "I said a Hip Hop Hooray, that's right!",
	incorrect: "Inncorrect your flow is weak son!",
	endTime: "OOPS! Times up!",
    finished: "Okay, Let's see if your dope or a dope."
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
    }
    
    countdown();
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); 
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}


