function createTeam(n){
    return {name : n, score : 0, status : false}
}

var teams = [createTeam("A"), createTeam("B"), createTeam("C"), createTeam("D"), createTeam("E")];

var cur = 0;

function giveObjectOption(qs, ls, n){
    var question = {qs : qs, a: ls[0], b: ls[1], c: ls[2], d:ls[3], ans:ls[n-1]};
    return question;
}

function rounds(){
    var r1 = [
    	giveObjectOption("What is your mother's maiden name?", ["OptionA", "OptionB", "OptionC", "OptionD"], 3),
    	giveObjectOption("Question2", ["OptionA", "OptionB", "OptionC", "OptionD"], 2)
    ]

    var r3 = [
    	giveObjectOption("Question1", ["OptionA", "OptionB", "OptionC", "OptionD"], 3),
    	giveObjectOption("Question2", ["OptionA", "OptionB", "OptionC", "OptionD"], 2)
    ]

    return [r1, r3];
}


function score_update(option_provided, teamno) {
	var r = rounds();
	var question = r[roundNumber][cur];	
	if (question.ans === option_provided) {
		teams[teamno].score += 10;
	}
	else {
	 	teams[teamno].score -= 5;
	}
}
var mytime;

function next_question(roundNumber){
	var r = rounds();
	var q = r[roundNumber][cur];
	var div = document.getElementById("div0");
	div.innerHTML = "<span class = \"question\" >" +
        q.qs + "</span>" + "<hr> <br/>" + q.a + "<br/>" +
        q.b + "<br/>" + q.c + "<br/>" + q.d + "<br/>";
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
}


function update_score(teamno) {
	var teamdiv = document.getElementById("team"+(teamno+1));
	teamdiv.innerHTML = teams[teamno].score;	
}

function print_all_scores() {
	[0, 1, 2, 3, 4].map(update_score);
}
