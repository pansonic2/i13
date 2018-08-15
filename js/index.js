expressions = ["To do something, you...", "Since", "In some cases I would say...", "Actually", "Therefore", 'Naturally', 'However', "In conclusion", "Another problem", "Take for example", "As", "Some people say that...", "Normally", "Nowadays", "According to..." ];
//questions = ["Where do you usually watch TV programs/Shows? Why?/Why not?", "What's your favorite TV program/show? Why?", "Are there any programs/shows you don't like watching? Why?/Why not?", "Do you think you will watch more TV or fewer TV programs/shows? Why/Why not?", "Describe someone you know who has started a business. You should say who this person is, what work this person does, why this person decided to start a business. Explain whether you would like to do the same kind of work.", "What kinds of jobs do young people NOT want to do in your country?", "Who is best at advising young people about choosing a job: teachers or parents?", "Is money always the most important thing when choosing a job?", "Do you agree that many people nowadays are under pressure to work longer hours and take less holiday?", "What is the impact on society of people having a poor work-life balance?", "Could you recommend some effective strategies for governments and employers to ensure people have a good work-life balance?"];
questions = ["When you go shopping, do you prefer to pay for things in cash or by card? Why?", "Do you ever save money to buy special things? Why?/Why not?", "Would winning a lot of money make a big difference to your life? Why(not)?", "Describe an interesting discussion you had as part of your work or studies. You should say what the subject was, who you discussed the subject with, what opinions were expressed and why you found the conversation interesting.", "Do you think that it's better to talk to friends and not family about problems?", "What are the possible effects of poor written communication skills at work?", "What do you think will be the future impact of technology on communication in the workplace?"]
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
document.getElementById('expression10').innerHTML = expressions[0];
document.getElementById('expression11').innerHTML = expressions[10];
document.getElementById('expression12').innerHTML = expressions[11];
document.getElementById('expression13').innerHTML = expressions[12];
document.getElementById('expression14').innerHTML = expressions[13];
document.getElementById('expression15').innerHTML = expressions[14];
document.getElementById('expression16').innerHTML = expressions[15];

