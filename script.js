var hasConfirmed = confirm("Are you Ready to play?");
console.log(hasConfirmed);

if( hasConfirmed ) {
  var myName = prompt("What is your name?");

if ( myName.length <= 2 ) {
  myName = "Anon";
}
document.write("<p>Hello " + myName);
document.write("<br>your Game is about to begin.</br> you have just arrived at a 4 way stop.</p>");


var myAnswer1 = prompt("are you the only one waiting?(yes/no)");

if (myAnswer1 ==="yes"){ document.write("<p>proceeded safely throught the intersection");
}else{
  var myAnswer2 = prompt("are you the first one?");

  if (myAnswer2 ==="yes"){ document.write("<p> proceeded safely throught the intersection.");
  }else{

   }
  }
}
