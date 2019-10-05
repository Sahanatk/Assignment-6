/*eslint-env browser*/


//Largest of two numbers
/*var x;
var y;
x = window.prompt("Enter an Integer");
y = window.prompt("Enter an another Integer");
if (x > y){
    document.write("The largest over two numbers is"+ " " +parseInt(x));
}
else if(y > x){
    document.write("The largest over two numbers is"+ " " +parseInt(y));
}
else if(x == y){
    window.document.write("Both are equal");
}*/


//The coin-flip game
/*var heads=0;
var tails=1;
var coinFlip = Math.floor(Math.random() * 100);
var choice;
choice = window.prompt("Heads or Tails");
var conditional;
if (coinFlip <= 50){
    document.write("Its heads");
    conditional = heads;
} else {
    document.write("Its tails");
    conditional = tails;
}
if(conditional == heads && choice == "heads")
{
  window.alert("The flip was heads and you chose heads...you win!");
}
else if(conditional == heads && choice == "tails")
{
  window.alert('The flip was heads and you chose tails...you lose!');
}
else if(conditional == tails && choice == "heads")
{
  window.alert('The flip was tails and you chose heads...you lose!');
}
else if(conditional == tails && choice == "tails")
{
  window.alert('The flip was tails and you chose tails...you win!');
}*/

// coin-flip game redux
/*var coinFlip;
for(var i = 1; i <=10; i+=1){
    coinFlip=Math.round(Math.random());
   if (coinFlip == 0){
        document.write("\nHeads");
    }
    else if (coinFlip == 1){
        document.write("\nTails");
    }
}*/

//The coin-flip streak game
/*var coinFlip;
var temp;
do{
    coinFlip=Math.round(Math.random());
    if(coinFlip == 0){
        document.write("Heads" +"<br>");
    } else {
        window.console.log("Tails");
        temp = "tails";
    }
}while(temp != "tails");
document.write("Oops you flipped tails!!The game is over");*/

//looping a triangle
/*for (var i=1 ;i<=7 ;i+=1){
    for (var j=1; j<=i; j+=1){
            document.write("#");
    }
  document.write("<br>");
}*/

//odd or even
/*var i;
for (i=0 ;i<=15; i+=1){
    if(i % 2 == 0){
        document.write(i +" is even" + "<br>");
    }
    else{
        document.write(i + " is odd" + "<br>");
    }
}*/

//Marco! polo!
/*var i;
for (i=1; i<=100; i+=1){
    if(i % 3 == 0 && i % 5 == 0){
        document.write("Marco!Polo!!" + "<br>");
    }
    else if(i % 5 == 0){
        document.write("Polo!" + "<br>");
    }
   else if(i % 3 == 0){
        document.write("Marco!" + "<br>");
    }
    else{
        document.write(i +"<br>");
    }
}*/

//Countdown
/*var num = window.prompt("Enter an number to begin countdown");
 setInterval(function(){
    document.body.innerHTML = "";
    document.write(num); 
    num = num - 1;
    if (num < -1) {
        document.body.innerHTML = "";  
    }
}, 1000);*/




