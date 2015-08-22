function giveObjectOption(qs, ls, n){
    var question = {qs : qs, a: ls[0], b: ls[1], c: ls[2], d:[3], ans:ls[n-1]};
    return question;
}

function rounds(){
    var r1 = [
    	giveObjectOption("Question1", "OptionA", "OptionB", "OptionC", "OptionD", 3),
    	giveObjectOption("Question2", "OptionA", "OptionB", "OptionC", "OptionD", 2)
    ]

    var r3 = [
    	giveObjectOption("Question1", "OptionA", "OptionB", "OptionC", "OptionD", 3),
    	giveObjectOption("Question2", "OptionA", "OptionB", "OptionC", "OptionD", 2)
    ]
}


 
function score_update(question, option_provided, team) {
	if (question.ans === option_provided) {
		team.score += 10;
	}
	else {
	 	team.score -= 5;
	}
}