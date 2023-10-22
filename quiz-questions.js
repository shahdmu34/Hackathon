const quiz_Questions = [
    {
        question: "You need a weapon what do you choose:",
        answer: [
            {text:"Your fists", extrovert: 2},
            {text:"Archery", introvert: 2 },
            {text:"Sword" ,extrovert: 1 },
            {text:"Knife",  introvert: 1 },
           
        ]
    },
    {
        question: "Choose a power: ",
        answer: [
            {text:"Invisibility " , introvert: 2 },
            {text:"Healing", extrovert: 1 },
            {text:"Flying " , introvert: 1  },
            {text:"Super strength", extrovert: 2},
           
        ]
    },
    {
        question: "You have to pick a road. Do you ",
        answer: [
            {text:"Go the direct path you already know but long" , routine: 2},
            {text:"Grab a boat and go", spontaneous: 2  },
            {text:"Woods is dangerous but shorter", spontaneous:1 },
            {text:"Go on a road with a map", routine: 1},
           
        ]
    },
    {
        question: "A monster shows up. How should you defeat him",
        answer: [
            {text:"Fight him with your weapon", spontaneous: 2 },
            {text:"Hide", routine: 2 },
            {text:"Throw something at it" , spontaneous: 1 },
            {text:"Talk it out" , routine: 1},
           
        ]
    },
    {
        question: "You  find people that are lost in the forest",
        answer: [
            {text:"Do you lead them" , Leader: 2},
            {text:"Suggest where they can find help" , follower: 1},
            {text:"Do you give them directions", Leader: 1 },
            {text:"Don’t help they seem suspicious", follower: 2},
           
        ]
    },
    {
        question: "choose your companion",
        answer: [
            {text:"Fast Cat" , Leader:  1},
            {text:"Vision Bird" ,Leader: 2 },
            {text:"Buff Ants" , follower: 1 },
            {text:"Good bite Dog" , follower: 2 },
           
        ]
    },
    {
        question: "A wall you need to cross with a guard",
        answer: [
            {text:"Dig a hole and go under", creative: 1 },
            {text:"Build a ladder with things you find around you" , creative: 2 },
            {text:"Look for any hidden entrance", analytical: 2 },
            {text:"Bargain with the guard" , analytical: 1},
           
        ]
    },
    {
        question: "You meet a turtle what do you do?",
        answer: [
            {text:"Say hi(but judge the turtle)" , analytical: 2 },
            {text:"Ignore the turtle" , analytical: 1},
            {text:"Ask the turtle a question" , creative: 1 },
            {text:"Befriend the turtle" , creative: 2},
           
        ]
    },
    {
        question: "Someone asks for money. Do you",
        answer: [
            {text:"give it to them" , purpose: 2},
            {text:"Give a little" , purpose: 1 },
            {text:"trade it for something" , money:1 },
            {text:"Apologize", money: 2 },
           
        ]
    },
    {
        question: "What is your adventure:",
        answer: [
            {text:"Chasing a bounty", money: 2 },
            {text:"Become the strongest in the realm" , money:1},
            {text:"Save your bestie(turtle)" ,purpose: 2},
            {text:"Explore the world and learn" , purpose: 1 },
           
        ]
    }
    

];
/*
const careerOptions = [
    {
        career_array: ["introver","spontaneous","follower", "money", "analytical"],
        career: "Computer Science"
    },
    {
        career_array: ["extrovert", "spontaneous" , "follower" , "purpose", "analytical"],
        career: "HealthCare"
    },
    {
        career_array: ["extrovert", "spontaneous", "money" , "creative"],
        career: "Business"
    },{
        career_array: ["creative" , "routine", "leader", "purpose","analytical" ],
        career: "Psych"
    },
    {
        career_array: ["introvert", "routine", "follower", "purpose", "analytical"  ],
        career: "Psych"
    },{
        career_array: ["extrovert", "spontaneous" , "leader", "purpose" , "creative"  ],
        career: "Psych"
    }
]
*/
//pulling in html
const question_elem = document.getElementById("question");
const userAnswer = document.getElementById("answerBtns");
const nextBtn = document.getElementById("next_question");

//scoring traits
let promptInxdex = 0;
let extrovert_score = 0;
let introvert_score =0;
let routine_score = 0;
let spontaneous_score = 0;
let leader_score = 0;
let follower_score = 0;
let purpose_score =0;
let money_score = 0;
let creative_score = 0;
let analytical_score = 0;

//career arrays
const computerScience = ["introver","spontaneous","follower", "money", "analytical"];
const healthCare = ["extrovert", "spontaneous" , "follower" , "purpose", "analytical"];
const business = ["extrovert", "spontaneous", "money" , "creative"];
const psych = ["creative" , "routine", "leader", "purpose","analytical" ];
const law = ["introvert", "routine", "follower", "purpose", "analytical"  ];
const art = ["extrovert", "spontaneous" , "leader", "purpose" , "creative"  ];
const RealEstate = ["extrovert", "spontaneous", "follower", "leader", "analytical"];

//start quiz
function beginQuiz(){
    promptInxdex = 0;
    user_score_array = [];
    answer_promt = [];
    
    extrovert_score =0;
    introvert_score = 0;
    routine_score = 0;
    spontaneous_score = 0;
    leader_score = 0;
    follower_score = 0;
    purpose_score = 0;
    money_score = 0;
    creative_score = 0;
    analytical_score = 0;
    
   nextBtn.innerHTML = "Next";
    displayPrompts();

    
}

function displayPrompts(){
    resetPrompts();
    let displayedQuestion = quiz_Questions[promptInxdex];
    let promptNum = promptInxdex + 1;
    question_elem.innerHTML = promptNum + ": " + displayedQuestion.question;
    displayedQuestion.answer.forEach(answers =>{
        const btn = document.createElement("button");
        btn.innerHTML = answers.text;
        btn.classList.add("btn");
        //store score for each trait
        btn.dataset.extrovert = answers.extrovert;
        btn.dataset.introvert = answers.introvert;
        btn.dataset.routine = answers.routine;
        btn.dataset.spontaneous = answers.spontaneous;
        btn.dataset.Leader = answers.Leader;
        btn.dataset.follower = answers.follower;
        btn.dataset.purpose = answers.purpose;
        btn.dataset.money = answers.money;
        btn.dataset.creative = answers.creative;
        btn.dataset.analytical = answers.analytical;

        userAnswer.appendChild(btn);
        btn.addEventListener("click", promptResults );

    });
}
function resetPrompts(){
    nextBtn.style.display = "none";
    while(userAnswer.firstChild){
        userAnswer.removeChild(userAnswer.firstChild);
    }
}


//needed so that the answer options appear - linked to the display prompts function
function promptResults(e){
    const btnSelect = e.target;
    const extrovertNum = parseInt(btnSelect.dataset.extrovert);
    const introvertNum = parseInt(btnSelect.dataset.introvert);
    const routineNum = parseInt(btnSelect.dataset.routine);
    const spontaneousNum = parseInt(btnSelect.dataset.spontaneous);
    const followerNum = parseInt(btnSelect.dataset.follower);
    const leaderNum = parseInt(btnSelect.dataset.leader);
    const purposeNum = parseInt(btnSelect.dataset.purpose);
    const moneyNum = parseInt(btnSelect.dataset.money);
    const creativeNum = parseInt(btnSelect.dataset.creative);
    const analyticalNum = parseInt(btnSelect.dataset.analytical);
   //need to store the score based on the option selected

    extrovert_score += extrovertNum;
    introvert_score += introvertNum;
    routine_score +=routineNum;
    spontaneous_score += spontaneousNum;
    follower_score += followerNum;
    leader_score += leaderNum;
    purpose_score += purposeNum;
    money_score += moneyNum;
    creative_score += creativeNum;
    analytical_score += analyticalNum;
   
   
    
    nextBtn.style.display = "block";
}

function careerType(){
    //array holds the answer from user choices
    const user_score_array = [];
    if(extrovert_score > introvert_score){
        user_score_array.push(extrovert_score);
    }else{
        user_score_array.push(introvert_score);

    }
    if(routine_score > spontaneous_score){
        user_score_array.push(routine_score);

    }else{
        user_score_array.push(spontaneous_score);


    }
    if(leader_score > follower_score){
        user_score_array.push(leader_score);

    }else{
        user_score_array.push(follower_score);


    }
    if(purpose_score > money_score){
        user_score_array.push(purpose_score);

    }else{
        user_score_array.push(money_score);


    }
    if(creative_score > analytical_score){
        user_score_array.push(creative_score);

    }else{
        user_score_array.push(analytical_score);


    }
    console.log(user_score_array);
    return user_score_array;

}

function careerNames(){
    //array holds the answer from user choices
    
    const user_trait_array= [];
    if(extrovert_score > introvert_score){
        user_trait_array.push("Extrovert");
    }else{
        user_trait_array.push("Introvert");

    }
    if(routine_score > spontaneous_score){
        user_trait_array.push("Routine");

    }else{
        user_trait_array.push("Spontaneous");


    }
    if(leader_score > follower_score){
        user_trait_array.push("Leader");

    }else{
        user_trait_array.push("Follower");


    }
    if(purpose_score > money_score){
        user_trait_array.push("Purpose");

    }else{
        user_trait_array.push("Money");


    }
    if(creative_score > analytical_score){
        user_trait_array.push("Creative");

    }else{
        user_trait_array.push("Analytical");


    }
    console.log (user_trait_array);
    return user_trait_array;

}
 function maxTrait(){
    let i = arr.indexOf(Math.max(...user_score_array));
    return user_trait_array[i];
 }

function user_Result(){
    resetPrompts();

    const user_score_array = careerType();

  
    //output the answer
    question_elem.innerHTML = `end of quiz! ${user_score_array}`;
    nextBtn.innerHTML = `Back TO Home Page!`;
   // nextBtn.style.display = "block";
}

function nextBtn_funct(){
    promptInxdex++;
    if(promptInxdex < quiz_Questions.length){
        displayPrompts();
    }else{
        user_Result();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(promptInxdex < quiz_Questions.length){
        nextBtn_funct();
    }else{
        beginQuiz();
    }
});

beginQuiz();


