const quiz_Questions = [
    {
        question: "You need a weapon what do you choose:",
        image: "img/image-8.png",
        answer: [
            {text:"Your fists", extrovert: true},
            {text:"Archery", extrovert: false },
            {text:"Sword" ,extrovert: false },
            {text:"Knife",  extrovert: true },
           
        ]
    },
    {
        question: "Choose a power: ",
        image: "img/image-4.png",
        answer: [
            {text:"Invisibility " , extrovert: false },
            {text:"Healing", extrovert: true },
            {text:"Flying " , extrovert: false },
            {text:"Super strength", extrovert: true},
           
        ]
    },
    {
        question: "You have to pick a road. Do you ",
        answer: [
            {text:"Go the direct path you already know but long" , routine: true},
            {text:"Grab a boat and go", routine: false },
            {text:"Woods is dangerous but shorter", routine: false },
            {text:"Go on a road with a map", routine: true},
           
        ]
    },
    {
        question: "A monster shows up. How should you defeat him",
        answer: [
            {text:"Fight him with your weapon", routine: false },
            {text:"Hide", routine: true},
            {text:"Throw something at it" , routine: false },
            {text:"Talk it out" , routine: true},
           
        ]
    },
    {
        question: "You  find people that are lost in the forest",
        answer: [
            {text:"Do you lead them" , Leader: true},
            {text:"Suggest where they can find help" , Leader: false},
            {text:"Do you give them directions", Leader: true},
            {text:"Don’t help they seem suspicious", Leader: false},
           
        ]
    },
    {
        question: "choose your companion",
        answer: [
            {text:"Fast Cat" , Leader:  true},
            {text:"Vision Bird" ,Leader: true},
            {text:"Buff Ants" , Leader: false },
            {text:"Good bite Dog" , Leader: false},
           
        ]
    },
    {
        question: "A wall you need to cross with a guard",
        answer: [
            {text:"Dig a hole and go under", creative: true },
            {text:"Build a ladder with things you find around you" , creative: true },
            {text:"Look for any hidden entrance", creative: false },
            {text:"Bargain with the guard" , creative: false},
           
        ]
    },
    {
        question: "You meet a turtle what do you do?",
        answer: [
            {text:"Say hi(but judge the turtle)" , creative: false },
            {text:"Ignore the turtle" , creative: false},
            {text:"Ask the turtle a question" , creative: true },
            {text:"Befriend the turtle" , creative: true},
           
        ]
    },
    {
        question: "Someone asks for money. Do you",
        answer: [
            {text:"give it to them" , purpose: true},
            {text:"Give a little" , purpose: true },
            {text:"trade it for something" , purpose:false },
            {text:"Apologize", purpose: false },
           
        ]
    },
    {
        question: "What is your adventure:",
        answer: [
            {text:"Chasing a bounty", purpose: false },
            {text:"Become the strongest in the realm" , purpose: false},
            {text:"Save your bestie(turtle)" ,purpose: true},
            {text:"Explore the world and learn" , purpose: true},
           
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
const computerScience = ["1","0","0", "0", "0"];
const healthCare = ["2", "1" , "0" , "2", "0"];
const business = ["1", "0", "0" , "2"];
const psych = ["1" , "2", "2", "2","0" ];
const law = ["2", "1", "0", "1", "0"  ];
const art = ["2", "0" , "2", "2" , "2"  ];
const RealEstate = ["2", "0", "0", "2", "0"];
const GraphicDesign = ["2", "1", "0" , "0", "2"];
const marketing = ["2", "0", "2", "0", "0", "0"];
const researcher = ["0", "0" , "0", "2", "2"];
const doctor = ["2" , "2", "0", "2", "0"];

let user_anser_array =[];

//start quiz
function beginQuiz(){
    promptInxdex = 0;
    answer_promt = [];
    extrovert_score =0;
    routine_score = 0;
    leader_score = 0;
    purpose_score = 0;
    creative_score = 0;
    score_array = [];


   nextBtn.innerHTML = "Next";
    displayPrompts();

    
}

function displayPrompts(){
    resetPrompts();
    let displayedQuestion = quiz_Questions[promptInxdex];
    let promptNum = promptInxdex + 1;
    question_elem.innerHTML = promptNum + ": " + displayedQuestion.question;
    document.getElementById('bg').style.backgroundImage = `url(${displayedQuestion.image})`;
    displayedQuestion.answer.forEach(answers =>{
        const btn = document.createElement("button");
       

        btn.innerHTML = answers.text;
        btn.classList.add("btn");
        userAnswer.appendChild(btn);


        //store score for each trait
        if(answers.extrovert){
            btn.dataset.extrovert = answers.extrovert;
        }else if(answers.routine){
            btn.dataset.routine = answers.routine;
        }else if(answers.Leader){
            btn.dataset.Leader = answers.Leader;
        }else if(answers.creative){
            btn.dataset.creative = answers.creative;
        }else if(answers.purpose){
            btn.dataset.purpose = answers.purpose;
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


//needed so that the answer options appear - linked to the display prompts function
function promptResults(e){
    const btnSelect = e.target;
    const isExtrovert = btnSelect.dataset.extrovert ==="true";
    const isRoutine = btnSelect.dataset.routine ==="true";
    const isLeader = btnSelect.dataset.law ==="true";
    const isCreative = btnSelect.dataset.creative ==="true";
    const isPurpose = btnSelect.dataset.purpose ==="true";

    if(isExtrovert){
        btnSelect.classList.add("extrovert");
        extrovert_score++;
    }else{
        btnSelect.classList.add("introvert");
        introvert_score++;
    }
    
    if(isRoutine){
        btnSelect.classList.add("routine");
        routine_score++;
    }else{
        btnSelect.classList.add("spontaneous");
        spontaneous_score++;
    }
       
    if(isLeader){
        btnSelect.classList.add("leader");
        leader_score++;
    }else{
        btnSelect.classList.add("follower");
        follower_score++;
    }
    
    if(isPurpose){
        btnSelect.classList.add("purpose");
        purpose_score++;
    }else{
        btnSelect.classList.add("money");
        money_score++;
    }
        
    if(isCreative){
        btnSelect.classList.add("creative");
        creative_score++;
    }else{
        btnSelect.classList.add("analytical");
        analytical_score++;
    }
    score_array = [extrovert_score, introvert_score, routine_score, spontaneous_score, leader_score, follower_score, purpose_score, money_score, creative_score, analytical_score];
    
    Array.from(userAnswer.children).forEach(btn => {
        if(btn.dataset.extrovert){
            btn.classList.add("extrovert");
        }else if(btn.dataset.routine){
            btn.classList.add("routine")
        }else if(btn.dataset.Leader){
            btn.classList.add("leader")
        }else if(btn.dataset.purpose){
            btn.classList.add("purpose")
        }else if(btn.dataset.creative){
            btn.classList.add("creative")
        }
        btn.ariaDisabled = true;
    });
    
    
   nextBtn.style.display = "block";
}

function user_Result(){
    resetPrompts();

   // const careers = sortCareer();

   const user_anser_array = [extrovert_score ,routine_score, leader_score, purpose_score , creative_score];
   result = ""

   if(arrayComparison(user_anser_array, computerScience)){
        result = "computer science";
   }else if(arrayComparison(user_anser_array, healthCare)){
        result = "healthcare";
   }else if(arrayComparison(user_anser_array, business)){
        result = "business";
    }else if(arrayComparison(user_anser_array, psych)){
        result = "psych";
    }else if(arrayComparison(user_anser_array, law)){
        result = "law";
    }else if(arrayComparison(user_anser_array, art)){
        result = "art";
   }else if(arrayComparison(user_anser_array, researcher)){
    result = "researcher";
    }else if(arrayComparison(user_anser_array, GraphicDesign)){
        result = "GraphicDesign";
    }else if(arrayComparison(user_anser_array, marketing)){
        result = "marketing";
    }else if(arrayComparison(user_anser_array, RealEstate)){
        result = "RealEstate";
    }else if(arrayComparison(user_anser_array, doctor)){
        result = "doctor";
    }
/*
   if(computerScience.length === user_anser_array.length){
        result += " computerScience";
   }
   if(healthCare.length === user_anser_array.length)
   {
    result += " health care";
   }
   if(business.length === user_anser_array.length)
   {
    result += " Business";
   }
   if(psych.length === user_anser_array.length)
   {
    result += " psych";
   }
   if(law.length === user_anser_array.length)
   {
    result += " law";
   }
   if(art.length === user_anser_array.length)
   {
    result += " Art";
   }
   if(researcher.length === user_anser_array.length)
   {
    result += " researcher";
   }
   if(GraphicDesign.length === user_anser_array.length)
   {
    result += " Graphic Design";
   }
   if(GraphicDesign.length === user_anser_array.length)
   {
    result+= " Graphic Design";
   }
   if(doctor.length === user_anser_array.length)
   {
    result += " Doctor";
   }
   if(marketing.length === user_anser_array.length)
   {
    result += " Marketing";
   }
*/

    //output the answer
    resetPrompts();

    const careerSuggestion = suggestCareer();

    question_elem.innerHTML = `End of quiz! ${careerSuggestion}`;
    nextBtn.innerHTML = `Back To Home Page!`;
}
   
   
function suggestCareer() {
    const traitScores = [
        extrovert_score, routine_score, leader_score, purpose_score, creative_score, introvert_score,spontaneous_score,follower_score,money_score,analytical_score
    ];

    const traits = ['Extrovert', 'Routine', 'Leader', 'Purpose', 'Creative', 'Introvert', 'Spontaneous', 'Follower','Money', 'Analytical'];

    // Find the dominant trait
    const maxScore = Math.max(...traitScores);
    const dominantTraitIndex = traitScores.indexOf(maxScore);
    const dominantTrait = traits[dominantTraitIndex];

    // Match the dominant trait to career options
    let careerSuggestion = '';

    switch(dominantTrait) {
        case 'Extrovert':
            careerSuggestion = "Business, psych, healthcare";
            break;
        case 'Routine':
            careerSuggestion = "Accounting, data analytics, idk 2 is enough";
            break;
        case 'Leader':
            careerSuggestion = "Management, business";
            break;
        case 'Purpose':
            careerSuggestion = "Social Work, healthcare";
            break;
        case 'Creative':
            careerSuggestion = "Graphic Design, art, music";
            break;
        case 'Introvert':
            careerSuggestion=  "Computer Science";
            break;
        case 'Spontaneous':
            careerSuggestion="Investigator";
            break;
        case 'Money' :
            careerSuggestion= "Investor";
            break;
        case 'Follower':
            careerSuggestion= "finance";
            break;
        case 'Analytical':
            careerSuggestion= "mathematics";
            break;
        default:
            careerSuggestion = " ";
    }

    return careerSuggestion;
}

function arrayComparison(arr1 , arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }else{
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false; // Return false if a mismatch is found
            }
        }
        return true;
    }
   
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