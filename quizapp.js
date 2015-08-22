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
    	giveObjectOption("Question1", ["OptionA", "OptionB", "OptionC", "OptionD"], 3),
    	giveObjectOption("Question2", ["OptionA", "OptionB", "OptionC", "OptionD"], 2)
    ]

    var r3 = [
    	giveObjectOption("Question1", ["OptionA", "OptionB", "OptionC", "OptionD"], 3),
    	giveObjectOption("Question2", ["OptionA", "OptionB", "OptionC", "OptionD"], 2)
    ]

    return [r1, r3];
}


function score_update(question, option_provided, team) {
	if (question.ans === option_provided) {
		team.score += 10;
	}
	else {
	 	team.score -= 5;
	}
}

function next_question(roundNumber){
	var r = rounds();
	var q = r[roundNumber][cur];
	var div = document.getElementById("div0");
	div.innerHTML = q.qs + "<br/>" + q.a + "<br/>" + q.b + "<br/>" + q.c + "<br/>" + q.d + "<br/>";
	cur++;
}

