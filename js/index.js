expressions = ["Since", "In some cases I would say...", "Actually", "Therefore", 'Naturally', 'However', "In conclusion", "Another problem", "Take for example", "To summarize" ];
questions = ["Where do you usually watch TV programs/Shows? Why?/Why not?", "What's your favorite TV program/show? Why?", "Are there any programs/shows you don't like watching? Why?/Why not?", "Do you think you will watch more TV or fewer TV programs/shows? Why/Why not?", "Describe someone you know who has started a business. You should say who this person is, what work this person does, why this person decided to start a business. Explain whether you would like to do the same kind of work.", "What kinds of jobs do young people NOT want to do in your country?", "Who is best at advising young people about choosing a job: teachers or parents?", "Is money always the most important thing when choosing a job?", "Do you agree that many people nowadays are under pressure to work longer hours and take less holiday?", "What is the impact on society of people having a poor work-life balance?", "Could you recommend some effective strategies for governments and employers to ensure people have a good work-life balance?"];
question = 0;

console.log(questions[0]);

document.getElementById('expression1').innerHTML = "blah";
document.getElementById('question').innerHTML = "Questions";

function nextQuestion() {
  if(typeof questions[question+1] === 'undefined') {
    question = 0
}
else {
    question += 1;
}
  
  document.getElementById('question').innerHTML = questions[question];
}

document.getElementById('expression1').innerHTML = expressions[1];
document.getElementById('expression2').innerHTML = expressions[2];
document.getElementById('expression3').innerHTML = expressions[3];
document.getElementById('expression4').innerHTML = expressions[4];
document.getElementById('expression5').innerHTML = expressions[5];
document.getElementById('expression6').innerHTML = expressions[6];
document.getElementById('expression7').innerHTML = expressions[7];
document.getElementById('expression8').innerHTML = expressions[8];
document.getElementById('expression9').innerHTML = expressions[9];