function createTeam(n){
    return {name : n, score : 0, status : false}
}

var cur       = 0;
var cur_team  = 1;
var cur_round = 1;

var teams = [createTeam("A"), createTeam("B"), createTeam("C"), createTeam("D"), createTeam("E")];

function giveObjectOption(qs, ls, n){
    var question = {qs : qs, a: ls[0], b: ls[1], c: ls[2], d:ls[3], ans:n-1};
    return question;
}

function rounds(){
    var r3 = [
    	giveObjectOption("What is your mother's maiden name?", ["OptionA", "OptionB", "OptionC", "OptionD"], 3),
    	giveObjectOption("Question2", ["OptionA", "OptionB", "OptionC", "OptionD"], 2)
    ]

    var r1 = [
    	giveObjectOption("Which of the above has/have been declared as Classical Language/Languages by the Government of India?",
						["Bengali and Kannada only",
						 "Kannada only",
					     "Kannada and Telugu only",				
						 "Bengali, Kannada and Telugu"], 3),
    	giveObjectOption("Question2", ["OptionA", "OptionB", "OptionC", "OptionD"], 2)
    ]

    return [r1, r3];
}


function score_update(option_provided) {
	var r = rounds();
	var question = r[cur_round-1][cur];
	console.log(question);
	console.log(option_provided);
	if (question.ans == option_provided -1) {
		teams[cur_team-1].score += 10;
	}
	else {
	 	teams[cur_team-1].score -= 5;
	}
	print_all_scores();	
}

var mytime;

function next_question(){
	var r = rounds();
	var q = r[cur_round-1][cur];
	var question = document.getElementById("question")
    question.innerHTML = q.qs;
    var option1 = document.getElementById("option1");
    option1.innerHTML = q.a;
    var option2 = document.getElementById("option2");
    option2.innerHTML = q.b;
    var option3 = document.getElementById("option3");
    option3.innerHTML = q.c;
    var option4 = document.getElementById("option4");
    option4.innerHTML = q.d;
	cur++;
	clearInterval(mytime);
	var time = document.getElementById("timer");
	time.innerHTML = 30;
	mytime = setInterval(function() {
		time.innerHTML = time.innerHTML - 1;
		if (time.innerHTML == 0) {
			time.innerHTML = "Time's up."
			clearInterval(mytime);
		}
	}, 1000);
	cur_team++;
}

function update_score(teamno) {
	var teamdiv = document.getElementById("team"+(teamno+1));
	teamdiv.innerHTML = teams[teamno].score;
}

function print_all_scores() {
	[0, 1, 2, 3, 4].map(update_score);
}
