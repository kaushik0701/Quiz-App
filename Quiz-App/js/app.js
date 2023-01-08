const questions = [{
    'que': 'Which of the following is a markup language ?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'Which of the following is a markup language',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'None',
    'correct': 'b'

},
{
    'que': 'What does CSS stands for',
    'a': 'Majak hai kya',
    'b': 'Cascading Style Sheec',
    'c': 'Hum faltu ques ka javab nahi dena chahte',
    'd': 'None',
    'correct': 'b'


}
]

let index = 0;
let total = questions.length;
let right=0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");
let data = questions[index];
const loadQuestion = ()=>{
    if(index===total){
        return endQuiz();
    }else{
        reset();
        data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

    }
    }

const submitQuiz = () =>{
    const ans = getAnswer();
    if(ans=== data.correct){
         right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer= () =>{
    let answer;
    optionInput.forEach(
        (input)=>{
          if(input.checked){
            answer = input.value;
          }
        }
    )
    return answer;
}

const reset = () =>{
    optionInput.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML=`
    <div style = "text-align: center">
    <h3>Thanks for playing the quiz.</h3>
    <h2>${right}/${total} is correct</h2>
    </div>
    `
}

loadQuestion();
