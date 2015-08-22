function giveObjectOption(qs, ls, n){
    var option = {qs : qs, a: ls[0], b: ls[1], c: ls[2], d:[3], ans:ls[n-1]};
    return option;
}

function rounds(){
    var r1 = [giveObjectOption("Question1", "OptionA", "OptionB", "OptionC", "OptionD", 3)
    , giveObjectOption("Question2", "OptionA", "OptionB", "OptionC", "OptionD", 2)
    ]
}
