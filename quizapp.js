function createTeam(n){
    return {name : n, score : 0, status : false}
}

var cur       = 0;
var cur_team  = 0;
var cur_round = 1;

var teams = [createTeam("A"), createTeam("B"), createTeam("C"), createTeam("D"), createTeam("E")];

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
                        "August 23 2013"],
                        3),
        giveObjectOption("Which bank's slogan is THE BANKER TO EVERY INDIAN?",
                        ["HDFC Bank",
                        "State bank of India",
                        "Kotak Mahindra Bank",
                        "Yes bank"],
                        2),
        giveObjectOption(" The CHARMINAR in Hydrabad was constructed in commemoration of elimination of which disease?"
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

function score_update(option_provided) {
    var question = r[cur-1];
    if (question.ans == option_provided -1) {
        if (cur_round == 3) {
            teams[cur_team-1].score += 10;
        }
        else if (cur_round == 1) {
            var prev = cur_team - 2;
            var next = (cur_team) % 5;
            if (prev == -1) {
                prev = 4;
            }
            console.log(prev);
            console.log(next);
            teams[prev].score += 5;
            teams[next].score += 5;
            teams[cur_team - 1].score += 100;
        }
    }
    else {
        if (cur_round == 3){
            teams[cur_team-1].score -= 5;
        }
        else if (cur_round == 1) {
            var prev = cur_team -2;
            var next = cur_team % 5;
            if (prev === -1)
                prev = 4;
            teams[prev].score -= 5;
            teams[next].score -= 5;
            teams[cur_team - 1].score -= 5;
            console.log(teams[prev].score);
            console.log(teams[next].score);
            console.log(teams[cur_team - 1].score);
        }
    }
    print_all_scores(); 
}

var mytime;

function setRoundOne() {
    clearInterval(mytime);
    var time = document.getElementById("timer");
    time.innerHTML = "30";
    r = roundone();
    cur = 0;
    cur_round = 1;
    cur_team = 1;
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
    cur_team = 1;
}

function next_question(){
    var q = r[cur];
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
            score_update(-1);   
            clearInterval(mytime);
        }
    }, 1000);
    cur_team++;
    if (cur_team > 5){
        cur_team = cur_team % 5;
    }
}

function update_score(teamno) {
    var teamdiv = document.getElementById("team"+(teamno+1));
    teamdiv.innerHTML = teams[teamno].score;
}

function print_all_scores() {
    [0, 1, 2, 3, 4].map(update_score);
}
