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
    	giveObjectOption("Which of the following is an element?",
						["Ruby",
						"Sapphire",
						"Emerald",
						"Diamond"],
						4),
    	giveObjectOption("The Radcliffe Committee was appointed to",
						["solve the problem of minorities in India",
						"give effect to the Independence Bill",
						"delimit the boundaries between India and Pakistan",
						"enquire into the riots in East Bengal"],
						3),
    	giveObjectOption("What was the name of the dog in the 'Tom and Jerry' cartoons?",
						["Spyke and Nibbles",
						"Nibbles and Toodles",
						"Spyke and Tyke",
						"Tyke and Toodles"],
						3),
    	giveObjectOption("Which one of the following is the largest committee of the Parliament?",
						["The Committee on Public Accounts",
						"The Committee on Estimates",
						" The Committee on Public Undertakings",
						"The Committee on Petitions"],
						2),
    	giveObjectOption("What is the mathematical series that starts 0,1,1,2,3,5,8,13,21 called?",
						["Arithmetic Progression",
						"Fedral Carl Cos Series",
						"Geometric Series",
						"Fibonacci Series"],
						4),
    	giveObjectOption("In medieval India, the designations \"Mahattara\" and \"Pattakila\" were used for",
						["Military Officers",
						"Village Headmen",
						"Specialists in Vedic Rituals",
						"Chiefs of craft guilds"],
						2),
    	giveObjectOption("Which of the following gases was absent from the atmosphere of primitive earth?",
						["CO2",
						"O2",
						"N2O",
						"SO2"],
						2), 
    	giveObjectOption("Recently, a series of uprisings of people referred to as "Arab Spring" originally started from",
						[" Lebanon",
						"Syria",
						"Tunisia",
						"Egypt",
						3),
		giveObjectOption("The Jonas Brothers gained popularity from which of the following movies (first telecasted on disney channel)",
						["Night At the museum :2",
						"The 3D concert Experience",
						"Camp Rock",
						"The Highway is for gamblers"],
						3),
    	giveObjectOption("Question2", ["OptionA", "OptionB", "OptionC", "OptionD"], 2)
    ]

    return [r1, r3];
}


function score_update(option_provided) {
	var r = rounds();
	var question = r[cur_round-1][cur-1];
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
