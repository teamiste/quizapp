function createTeam(x, n){
    return {no:x, name : n, score : 0}
}

var cur       = 0;
var cur_team  = 0;
var cur_round;
cur_round = localStorage.getItem('cur_round');
if (cur_round == undefined) {
    cur_round = 1;
}
else {
    cur_round = 3;
}
var teams;

function clear() {
    if (cur_round == 1) {
        localStorage.removeItem("teams");
        teams = [createTeam(1, "A"), createTeam(2, "B"), createTeam(3, "C"), createTeam(4, "D"), createTeam(5, "E")];
        console.log("CLEARED");
    }
    else {
        eliminateRoundTwo();
    }
}

var teamindex;

teams = localStorage.getItem('teams');
if (teams == undefined){
    console.log("Undefined!");
    teams = [createTeam(1, "A"), createTeam(2, "B"), createTeam(3, "C"), createTeam(4, "D"), createTeam(5, "E")];
}
else {
    console.log("Nope, not undefined");
    teams = JSON.parse(teams);
}
console.log("Teams are\n");
console.log(teams);

function giveObjectOption(qs, ls, n){
    var question = {qs : qs, a: ls[0], b: ls[1], c: ls[2], d:ls[3], ans:n-1};
    return question;
}

function roundone() {
    var r1 = [
        giveObjectOption("Who won the first edition of the Hero Indian Super League?",
                        ["Atletico de Kolkata",
                        "Kerala Blasters FC",
                        "Chennaiyin FC",
                        "Mumbai City FC"],
                        1),
        giveObjectOption("Who is the first female train driver for the Indian Railways?",
                        ["Karen Harrison",
                        "Surekha Yadav",
                        "Mandakini Devi",
                        "Jaya Laxmi"],
                        2),
        giveObjectOption("Which of the following is not amongst the seven wonders of the Ancient World?",
                        ["The Hanging Gardens of Babylon",
                        "The Lighthouse of Alexandria",
                        "The Stonehenge of Wiltshire",
                        "The Great Pyramid of Giza"],
                        3),
        giveObjectOption("Which of the following android version will succeed lollipop?",
                        ["Marshmallow",
                        "Milkshake",
                        "MarsBar",
                        "Mocha"],
                        1),
        giveObjectOption("The United Nations declared the year 2015 as which of the following international years?",
                        ["International Year of Soils",
                        "International Year of Pulses",
                        "International Year of Water Cooperation",
                        "International Year of Family Farming"],
                        1),
        giveObjectOption("Which of the following movies are not based on a book?",
                        ["Slumdog Millionnaire",
                        "Gone Girl",
                        "The Godfather",
                        "Ben-Hur"],
                        4),
        giveObjectOption("What is the name of the traditional celebration/ war cry performed by the New Zealand Rugby before the start of a match?",
                        ["Zulu",
                        "Cherokee",
                        "Haka",
                        "Zumba"],
                        3),
        giveObjectOption("Which of the following movies is not a biopic?",
                        ["The Departed",
                        "The Imitation Game",
                        "The Wolf Of Wall Street",
                        "The Fifth Estate"],
                        1),
        giveObjectOption("What poison does Walter White use to kill Lydia Quayle in the series Breaking Bad?",
                        ["Phosphine",
                        "Ricin",
                        "Lily of the Valley",
                        "Cyanide"],
                        2),
        giveObjectOption("To whom was the last telegram sent in India?",
                        ["Pranab Mukherjee",
                        "Manmohan Singh",
                        "Rahul Gandhi",
                        "Indira Gandhi"],
                        3),
        giveObjectOption("Which bank's slogan is THE BANKER TO EVERY INDIAN?",
                        ["HDFC Bank",
                        "State bank of India",
                        "Kotak Mahindra Bank",
                        "Yes bank"],
                        2),
        giveObjectOption(" The CHARMINAR in Hydrabad was constructed in commemoration of elimination of which disease?",
                        ["Plague",
                        "Cancer",
                        "Leprosy",
                        "Yellow Fever"],
                        1),
        giveObjectOption("The motto of the United Nations Organization is ?",
                        [" Life for all!",
                        "Peace !",
                        "It's your world",
                        "Love and Peace"],
                        3),
        giveObjectOption("Which of the following oceans are connected by Panama Canal ?",
                        [" Atlantic and Indian Ocean",
                        "Pacific and Atlantic",
                        "Indian Ocean and Pacific",
                        "Atlantic and North Ocean"],
                        2),
        giveObjectOption("The Indian delegation to the first World Conference on Human Rights was led by?",
                        ["Farooq Abdullah",
                        "Dinesh Singh",
                        "Dr. Manmohan Singh",
                        "Dr.Shashi Tharoor"],
                        3)
    ];
    console.log(r1.length);
    return r1;
}

function roundthree(){
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
        giveObjectOption("Recently, a series of uprisings of people referred to as \"Arab Spring\" originally started from",
                        [" Lebanon",
                        "Syria",
                        "Tunisia",
                        "Egypt"],
                        3),
        giveObjectOption("The Jonas Brothers gained popularity from which of the following movies (first telecasted on disney channel)",
                        ["Night At the museum :2",
                        "The 3D concert Experience",
                        "Camp Rock",
                        "The Highway is for gamblers"],
                        3),
        giveObjectOption("In 1936, Jesse Owens won 4 Gold medals at the Summer Olympics in what city?",
                        ["London",
                        "Rome",
                        "Berlin",
                        "Tokyo"],
                        3),
        giveObjectOption("Where was India's first Computer installed?",
                        ["Indian Statictical Institute of Calcutta",
                        "Indian Institute of Technology,Delhi",
                        "Indian Institute of Technology, Mumbai",
                        "Bharat Sanchar Nigam Ltd"],
                        1),
        giveObjectOption("Which American president famously said, \"The only thing we have to fear is fear itself\"?",
                        ["J.F. Kennedy",
                        "Franklin D. Roosevelt",
                        "George Washington",
                        "Harry S. Truman"],
                        3),
        giveObjectOption("Which river did Mark Twain write about in many of his books?",
                        ["Mississipi",
                        "Nile",
                        "Hudson",
                        "Thames"],
                        1),
        giveObjectOption("The IPS officer from Gujarat cadre got suspended recently for taking on the Gujarat Government on the 2002 riots?",
                        ["Amitabh Thakur",
                        "Ashok Khemka",
                        "Sanjeev Bhatt",
                        "K.K. Patel"],
                        3),
        giveObjectOption("Which was the last movie directed by Yash Chopra?",
                        ["Rab Ne Bana Di Jodi",
                        "Jab Tak Hai Jaan",
                        "Veer Zara",
                        "Ek Tha Tiger"],
                        2),
        giveObjectOption("The \"Accessible India\" campaign is associated with which of the following fields?",
                        ["Tourism",
                        "Child Education",
                        "Empowerment of Gram Panchyats",
                        "Physically disabled persons"],
                        4),
        giveObjectOption("The mobile wallet app \"Buddy\" launched by which bank recently?",
                        ["SBI",
                        "PNB",
                        "HDFC",
                        "ICICI"],
                        1),
        giveObjectOption("Om Prakash Munjal, who passed away recently, was founder and the current chairman of__?",
                        ["Hero Cycles Ltd.",
                        " Hindustan Motors",
                        "Apollo Tyres",
                        "Maruti Udyog"],
                        1),
        giveObjectOption("Which historical monument in India recently got its twitter account?",
                        ["Taj Mahal",
                        "Qutub Minar",
                        "Red Fort",
                        "Fatehpur Sikri Monuments"],
                        1)
    ];
    return r1;
}

var r;
var mytime;
function score_update(option_provided) {
    clearInterval(mytime);
    var question = r[cur-1];
    if (question.ans == option_provided - 1) {
        if (cur_round == 3) {
            var t = teams[teamindex];
            t.score += 10;
        }
        else if (cur_round == 1) {
            var prev = cur_team - 2;
            var next = (cur_team) % 5;
            if (prev == -1) {
                prev = 4;
            }
            console.log(prev);
            console.log(next);
            var tprev = findTeam(prev + 1);
            var tnext = findTeam(next + 1);
            var tcur  = findTeam(cur_team);
            tprev.score += 5;
            tnext.score += 5;
            tcur.score += 15;
        }
    }
    else {
        if (cur_round == 3){
            var t = teams[teamindex];
            t.score -= 5;
        }
        else if (cur_round == 1) {
            var prev = cur_team -2;
            var next = cur_team % 5;
            if (prev === -1)
                prev = 4;
            var tprev = findTeam(prev + 1);
            var tnext = findTeam(next + 1);
            var tcur = findTeam(cur_team);

            tprev.score -= 10;
            tnext.score -= 10;
            tcur.score -= 5;
            console.log(tprev.score);
            console.log(tnext.score);
            console.log(tcur.score);
        }
    }
    print_all_scores();
}


function setRoundOne() {
    clearInterval(mytime);
    var time = document.getElementById("timer");
    time.innerHTML = "30";
    r = roundone();
    cur = 0;
    cur_round = 1;
    cur_team = 0;
    teamindex = -1;
}

function setRoundThree() {
    clearInterval(mytime);
    var time = document.getElementById("timer");
    time.innerHTML = "30";
    console.log("Setting to round three");
    r = roundthree();
    console.log(r);
    cur = 0;
    cur_round = 3;
    cur_team = teams[0].no;
    teamindex = -1;
}

function next_question(){
    console.log(cur);
    console.log("r"+r);
    var q = r[cur];
    console.log(q);
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
            time.innerHTML = "<style font-size = 20px> Time's up! </style>";
            score_update(-1);
            clearInterval(mytime);
        }
    }, 1000);
    teamindex++;
    if (teamindex >= teams.length){
        teamindex = teamindex % (teams.length);
    }
    console.log(teamindex);
    cur_team = teams[teamindex].no;
    console.log(cur_team)
    var pteam = document.getElementById("presentTeam");
    pteam.innerHTML = "Team " + String.fromCharCode(cur_team + 64);
}

function update_score(teamno) {
    console.log(teamno + 1);
    var teamdiv = document.getElementById("team"+(teamno)+"score");
    var t = findTeam(teamno);
    teamdiv.innerHTML = t.score;
}
function remove(teamno) {
    var x = document.getElementById("team"+teamno+"score");
    x.style.backgroundColor = "gray";
    x.fontcolor = "red";
    x.innerHTML = "You're out";
    x.style.fontSize = "30px";
}

function print_all_scores() {
    var lst = []
    var notinlst = [];
    var i;
    for (i = 0; i < teams.length; i++) {
        lst.push(teams[i].no);
    }
    for (i = 1; i <=5; i++) {
        if (lst.indexOf(i) == -1){
            notinlst.push(i);
        }
    }
    notinlst.map(remove)
    lst.map(update_score);
    console.log(JSON.stringify(teams));
    localStorage.setItem("teams", JSON.stringify(teams));
}

var randomInterval;
var possible_questions = [];
var i;
for (i = 1; i <= 20; i++) {
    possible_questions.push(i);
}
var contents_div0;

function random() {
    var div0 = document.getElementById("div0");
    contents_div0 = div0.innerHTML;
    div0.style.fontSize = "550px";
    div0.style.textShadow = "0px 0px 50px #0B3B2E";
    div0.style.opacity = "1";
    randomInterval = setInterval(function () {
        div0.innerHTML = possible_questions[Math.floor(Math.random()*possible_questions.length)];
        div0.style.color = randomColor();
        //div0.style.color = randomColor();
        //div0.style.backgroundColor = randomColor();
    }, 500);
}

function stopRandom() {
    var div0 = document.getElementById("div0");
    div0.style.fontSize = "30px";
    div0.style.color = "";
    div0.style.textShadow = "";
    div0.style.opacity = "0.8";
    //div0.style.color = "#00FFFF";
    console.log("stopping");
    clearInterval(randomInterval);
    var div0 = document.getElementById("div0");
    //console.log(div0.innerHTML);
    var x;
    for (x = 0; x < possible_questions.length; x++) {
        if (possible_questions[x] == div0.innerHTML){
            possible_questions.splice(x, 1);
        }
    }
    console.log(possible_questions);
    cur = div0.innerHTML;
    div0.innerHTML = contents_div0;
}

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

function selectteam(teamno) {
    cur_team = teamno;
    console.log("Current team changed to " + teamno);
}

function increase() {
    var t = findTeam(cur_team);
    t.score += 5;
    print_all_scores();
}

function decrease() {
    var t = findTeam(cur_team);
    t.score -= 5;
    print_all_scores();
}

function setround() {
    console.log("Storing next round to be 3");
    localStorage.setItem("cur_round", 3);
}

function eliminateRoundOne() {
    if (cur_round == 1) {
        teams.sort(function(a, b) {
            return a.score - b.score;
        })
        teams = teams.slice(2)
        console.log(teams);
    }
}

function eliminateRoundTwo() {
    teams.sort(function(a, b) {
        return a.score - b.score;
    });

    teams = teams.slice(1);
    console.log(teams);
}


function findTeam(teamno) {
    var x = teams.length;
    var i;
    for (i = 0; i < x; i++){
        if (teams[i].no == teamno)
            return teams[i];
    }
    return undefined;
}

//Round two
var r2q = 1;
function nextqs(){
    print_all_scores();
    if (r2q > 6)
        return ;
    var i1 = document.getElementById("image1");
    var i2 = document.getElementById("image2");
    var i3 = document.getElementById("image3");
    var i4 = document.getElementById("image4");

    var folder = "q" + r2q;

    i1.innerHTML = "<img src = \"./" + folder + "/i1\" style=\"width:500px;height:300px;\">";
    i2.innerHTML = "<img src = \"./" + folder + "/i2\" style=\"width:500px;height:300px;\">";
    i3.innerHTML = "<img src = \"./" + folder + "/i3\" style=\"width:500px;height:300px;\">";
    i4.innerHTML = "<img src = \"./" + folder + "/i4\" style=\"width:500px;height:300px;\">";

    r2q++;
}

function initRoundTwo() {
    setround();
    eliminateRoundOne();
}

function updateScore(teamno, newscore) {
    var x;
    for (x = 0; x < teams.length; x++){
        if (teams[x].no == teamno) {
            teams[x].score = newscore;
        }
    }
}
