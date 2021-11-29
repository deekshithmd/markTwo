var score=0
const chalk=require("chalk")
var readlineSync=require("readline-sync")
var name=readlineSync.question("What's your name? ")
console.log("Welcome "+name+", Are you good in general knowledge? Let's Test your knowledge level")

function play(question,answer){
  var ans=readlineSync.question(question+" : ")
  if(ans.toLowerCase()==answer.toLowerCase()){
    console.log(chalk.green("Ohh great...You are correct"))
    score=score+1
  }
  else{
    console.log(chalk.red("Ohh...You are wrong"))
    console.log(chalk.green("Correct answer is "+chalk.underline(answer)))
  }
  console.log("Your current general knowledge score is ",score)
  console.log("-------------------------------------")
}

function level(score){
if(score>=9){
  console.log(chalk.bgGreen("Congratulations you have acheived Level 3 with the score of ",score))
}
else if(score>6){
  console.log(chalk.bgCyan("Congratulations you have acheived Level 2 with the score of ",score))
}
else if(score>=4){
  console.log("You have acheived Level 1 with the score of ",score)
}
else{
  console.log(chalk.bgRed("Your score is not satisfactory"))
}
}

questionBank=[{
  question:"Which is the capital of India?",
  answer:"New Delhi"
},
{
  question:"Which is the Naltional Animal of India?",
  answer:"Tiger"
},
{
  question:"When did India got independence?",
  answer:"15 August 1947"
},
{
  question:"What is the full form of IAS?",
  answer:"Indian Administrative Service"
},
{
  question:"Who is the first Prime Minister of Independent India?",
  answer:"Javaharlal Nehru"
},
{
  question:"Which is the smallest country in the world?",
  answer:"Vatican City"
},
{
  question:"What is the currency of India?",
  answer:"Rupee"
},
{
  question:"Who invented Computer?",
  answer:"charles Babbage"
},
{
  question:"Which is the largest coffee producing state of India?",
  answer:"Karnataka"
},
{
  question:"Which city is capital of Karnataka?",
  answer:"Bengaluru"
},
{
  question:"India lies in which continent?",
  answer:"Asia"
},
{
  question:"National Anthem of India...",
  answer:"JanaGanaMana"
}]

highScore=[{
  name:"Deekshith",
  score:9
}]

for(var i=0;i<questionBank.length;i++){
  play(questionBank[i].question,questionBank[i].answer)
}
//console.log("Yess..Done, Your Final score is ",score)
level(score)
for(var i=0;i<highScore.length;i++){
  if(score>highScore[i].score){
    console.log(chalk.bgGreen.bold("Congratulations!!!...You surpassed "+highScore[i].name+" and now you are the topper. Please send the screenshot of score to update you in Score Board"))
  }
}