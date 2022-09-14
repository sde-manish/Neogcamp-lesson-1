//var readlineSync=require('readline-sync');
/*
var score=0;
var username=readlineSync.question("may i have your name? ");
//console.log(username)
var welcomeMessage="Welcome "+username
console.log(welcomeMessage)
var useranswerage=readlineSync.question("Am i older than 25? ");
if(useranswerage==="No" ||useranswerage==="no"){
   console.log("you are right!")
   score =score+1;
}
else{
   console.log("You are wrong!")
  score=score-1;
}
console.log("your score is "+score)

//creating a function
function add(num1,num2)
{
  console.log("first number:",num1,"second number:",num2)
  var sum=num1+num2;
  return sum;
}
//using the function
var result=add(5,8)
console.log("the sum is "+result)

//creating a new function
var readlineSync=require('readline-sync');
var score=0;
function play(question,answer)
{
  var useranswer=readlineSync.question(question);
  if(useranswer===answer)
  {    console.log("you were right !")
      score=score+1;
  }
  else
 {
  console.log("you were wrong!");
  score=score-1;
 }
console.log("your score is "+score);
}
play("where do i live? ","Banglore")
play("where do i study? ","sambhram")
play("what is my favourite drink? ","sprite")

//uisng for loop 
for (i=0;i<5;i++)
{
  console.log("Manish kumar")
}

//creaating a grocerylist and printing items
var grocerylist=['milk','bread','peanut','oil']
console.log(grocerylist[0])
console.log(grocerylist[1])
console.log(grocerylist[2])
console.log(grocerylist[3])

//using loop to print items
for (i=0;i<4;i++)
{
  console.log(grocerylist[i])
}
//printing all items in the list finding the length of the list
for(i=0;i<grocerylist.length;i++)
{
  console.log(grocerylist[i])
}

//creating objects
//Example:-
var Manish={
  college:"Sambhram",age:"22",place:"Banglore"
}
console.log(Manish.college)
console.log(Manish.age)
console.log(Manish.place)

//Main project of objects
var superman={
  name:"superman",power:"fight",costumecolor:"blue",strength:1000,stealth:0,inteligence:100,
}
var batman={
  name:"Batman",power:"Martialarts",costumecolor:"Black",strength:100,stealth:100,inteligence:1000,
}
var superheroes=[superman,batman];
for(i=0;i<superheroes.length;i++)
{
  var currenthero=superheroes[i];
console.log("Name: "+currenthero.name+"\n"+"power: "+currenthero.power+"\n"+"Costumecolor: "+currenthero.costumecolor+"\n"+"Strength:"+currenthero.strength+"\n"+"Stealth:"+currenthero.stealth+"\n"+"Inteligence:"+currenthero.inteligence);
console.log("--------------------------------------");
}
*/
//clubing all together
var readlinesync = require('readline-sync');
var score = 0;
var useranswer = readlinesync.question("May i have your name? ")
var welcome = "Welcome " + useranswer + " to this game";
console.log(welcome)
function play(question, answer) {
  {
    var useranswer = readlinesync.question(question);
    if (useranswer === answer) {
      console.log("right!")
      score = score + 1;
    }
    else {
      console.log("wrong!");
      score = score - 1;
    }
    console.log("score=" + score)
  }

}
var questions = [{ question: "where do i live? ", answer: "banglore" }, { question: "my favorite superhero would be?  ", answer: "ironman" }, { question: "what is my favourite food? ", answer: "biryani" }, { question: "what is my favourite fast-food? ", answer: "pizza" }]
for (i = 0; i < questions.length; i++) {
  currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer);

}
console.log("your final score is " + score);