// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//

(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  // See Lecture 50, part 1
  for (var i = 0; i < names.length; i++) {
      
    (function(window){
      var helloSpeaker = {};
    
   
      var speakWord = "Hello";
   
      helloSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);}
      window.helloSpeaker = helloSpeaker
    }) (window);

    (function(window){
      var byeSpeaker = {};
    
      var speakWord = "Good Bye";
    
      byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);}
      window.byeSpeaker = byeSpeaker
    }) (window);
   
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
}
})()
