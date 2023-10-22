const quiz_Questions = [
    {
        question: "You need a weapon what do you choose:",
        answer: [
            {text:"Your fists", extrovert: true},
            {text:"Archery", introvert: true },
            {text:"Sword" ,extrovert: false },
            {text:"Knife",  introvert: false },
           
        ]
    },
    {
        question: "Choose a power: ",
        answer: [
            {text:"Invisibility " , introvert: true },
            {text:"Healing", extrovert: false },
            {text:"Flying " , introvert: false  },
            {text:"Super strength", extrovert: true},
           
        ]
    },
    {
        question: "You have to pick a road. Do you ",
        answer: [
            {text:"Go the direct path you already know but long" , routine: true},
            {text:"Grab a boat and go", spontaneous: true  },
            {text:"Woods is dangerous but shorter", spontaneous:false },
            {text:"Go on a road with a map", routine: false},
           
        ]
    },
    {
        question: "A monster shows up. How should you defeat him",
        answer: [
            {text:"Fight him with your weapon", spontaneous: true },
            {text:"Hide", routine: true },
            {text:"Throw something at it" , spontaneous: false },
            {text:"Talk it out" , routine: false},
           
        ]
    },
    {
        question: "You  find people that are lost in the forest",
        answer: [
            {text:"Do you lead them" , Leader: true},
            {text:"Suggest where they can find help" , follower: false},
            {text:"Do you give them directions", Leader: false },
            {text:"Don’t help they seem suspicious", follower: true},
           
        ]
    },
    {
        question: "choose your companion",
        answer: [
            {text:"Fast Cat" , Leader:  false},
            {text:"Vision Bird" ,Leader: true },
            {text:"Buff Ants" , follower: false },
            {text:"Good bite Dog" , follower: true },
           
        ]
    },
    {
        question: "A wall you need to cross with a guard",
        answer: [
            {text:"Dig a hole and go under", creative: false },
            {text:"Build a ladder with things you find around you" , creative: true },
            {text:"Look for any hidden entrance", analytical:true },
            {text:"Bargain with the guard" , analytical: false},
           
        ]
    },
    {
        question: "You meet a turtle what do you do?",
        answer: [
            {text:"Say hi(but judge the turtle)" , analytical: true },
            {text:"Ignore the turtle" , analytical: false},
            {text:"Ask the turtle a question" , creative: false },
            {text:"Befriend the turtle" , creative: true},
           
        ]
    },
    {
        question: "Someone asks for money. Do you",
        answer: [
            {text:"give it to them" , purpose: true},
            {text:"Give a little" , purpose: false },
            {text:"trade it for something" , money:false },
            {text:"Apologize", money: true },
           
        ]
    },
    {
        question: "What is your adventure:",
        answer: [
            {text:"Chasing a bounty", money: true },
            {text:"Become the strongest in the realm" , money:false},
            {text:"Save your bestie(turtle)" ,purpose: true},
            {text:"Explore the world and learn" , purpose: false },
           
        ]
    }
    

];
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
const art = ["extrovert", "spontaneous" , "leader", "purpose" , "creative"  ]

//start quiz
function beginQuiz(){
    promptInxdex = 0;
    use_Score = 0;
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
        userAnswer.appendChild(btn);
        
        if(answers.extrovert){
            btn.dataset.extrovert = answers.extrovert;
        }else if(answers.introvert){
            btn.dataset.introvert = answers.introvert;
        }else if(answers.routine){
            btn.dataset.routine = answers.routine;
        }else if(answers.spontaneous){
            btn.dataset.spontaneous = answers.spontaneous;
        }else if(answers.Leader){
            btn.dataset.Leader = answers.Leader;
        }else if(answers.follower){
            btn.dataset.follower = answers.follower;
        }else if(answers.purpose){
            btn.dataset.purpose = answers.purpose;
        }else if(answers.money){
            btn.dataset.money = answers.money;
        }else if(answers.creative){
            btn.dataset.creative = answers.creative;
        }else if(answers.analytical){
            btn.dataset.analytical = answers.analytical;
        }
        
        btn.addEventListener("click", promptResults );

    });
}
function resetPrompts(){
    nextBtn.style.display = "none";
    while(userAnswer.firstChild){
        userAnswer.removeChild(userAnswer.firstChild);
    }
}

function promptResults(e){
    const btnSelect = e.target;
    const user_extrovert = btnSelect.dataset.extrovert ==="true";
    const user_introvert = btnSelect.dataset.extrovert ==="true";
    const user_routine = btnSelect.dataset.extrovert ==="true";
    const user_spontaneous = btnSelect.dataset.extrovert ==="true";
    const user_leader = btnSelect.dataset.extrovert ==="true";
    const user_follower = btnSelect.dataset.extrovert ==="true";
    const user_purpose = btnSelect.dataset.extrovert ==="true";
    const user_money = btnSelect.dataset.extrovert ==="true";
    const user_creative = btnSelect.dataset.extrovert ==="true";
    const user_analytical = btnSelect.dataset.extrovert ==="true";

    //if extrovert was selected
    if(user_extrovert){
        btnSelect.classList.add("veryextrovert");
        extrovert_score = extrovert_score + 2;
    }else if(!user_extrovert){
        btnSelect.classList.add("extrovert");
        extrovert_score = extrovert_score + 1;
    }else if(user_introvert){
        btnSelect.classList.add("veryintrovert");
        introvert_score = introvert_score + 2;
    }else if(!user_introvert){
        btnSelect.classList.add("introvert");
        introvert_score = introvert_score + 1;
    }else if(user_routine){
        btnSelect.classList.add("veryroutine");
        routine_score = routine_score + 2;
    }else if(!user_routine){
        btnSelect.classList.add("routine");
        routine_score = routine_score + 1;
    }else if(user_spontaneous){
        btnSelect.classList.add("verySpontaneous");
        spontaneous_score = spontaneous_score + 2;
    }else if(!user_spontaneous){
        btnSelect.classList.add("Spontaneous");
        spontaneous_score = spontaneous_score + 1;
    }else if(user_leader){
        btnSelect.classList.add("veryLeader");
        leader_score = leader_score + 2;
    }else if(!user_leader){
        btnSelect.classList.add("Leader");
        leader_score = leader_score + 1;
    }else if(user_follower){
        btnSelect.classList.add("veryfollower");
        follower_score = follower_score + 2;
    }else if(!user_follower){
        btnSelect.classList.add("veryfollower");
        follower_score = follower_score + 1;
    }else if(user_purpose){
        btnSelect.classList.add("veryPurpose");
        purpose_score = purpose_score + 2;
    }else if(!user_purpose){
        btnSelect.classList.add("Purpose");
        purpose_score = purpose_score + 1;
    }else if(user_money){
        btnSelect.classList.add("verymoney");
        money_score = money_score + 2;
    }else if(!user_money){
        btnSelect.classList.add("money");
        money_score = money_score + 1;
    }else if(user_creative){
        btnSelect.classList.add("verycreative");
        creative_score = creative_score + 2;
    }else if(!user_creative){
        btnSelect.classList.add("creative");
        creative_score = creative_score + 1;
    }else if(user_analytical){
        btnSelect.classList.add("veryanalytical");
        analytical_score = analytical_score + 2;
    }else if(!user_analytical){
        btnSelect.classList.add("analytical");
        analytical_score = analytical_score + 1;
    }
    Array.from(userAnswer.children).forEach( btn => {
        //disable user clicking on different btns
    });
    nextBtn.style.display = "block";
}

function careerType(){
    //array holds the answer from user choices
    const user_score_array = [];
    if(extrovert_score > introvert_score){
        user_score_array.push("extrovert");
    }else{
        user_score_array.push("introvert");
    }
    if(routine_score > spontaneous_score){
        user_score_array.push("routine");
    }else{
        user_score_array.push("spontaneous");

    }
    if(leader_score > follower_score){
        user_score_array.push("leader");
    }else{
        user_score_array.push("follower");

    }
    if(purpose_score > money_score){
        user_score_array.push("purpose");
    }else{
        user_score_array.push("money");

    }
    if(creative_score > analytical_score){
        user_score_array.push("creative");
    }else{
        user_score_array.push("analytical");

    }
}

function user_Result(){
    resetPrompts();
    //compare the two arrays to get answer!!
    if(user_score_array == computerScience){

    }
    //output the answer
    question_elem.innerHTML = `END`;
    nextBtn.innerHTML = `Back TO Home Page!`;
   // nextBtn.style.display = "block";
}
function nextBtn_funct(){
    promptInxdex++;
    if(displayedQuestion < quiz_Questions.length){
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


