$(document).ready(function() {

  var values = [
    "Later, Aligator",
    "In a while, Crocodile",
    "Goodbye, Dragonfly",
    "Smell ya later",
    "Did you fart?",
    "Later, Vader",
    "Take Care, Comb your hair",
    "Cheers, Big Ears",
    "Godspeed",
    "Toodles",
    "Later tater",
    "I’m gone, ~Poof~",
    "Rawr",
    "Bottoms up",
    "Scooby-doo",
    "Stay Puffed",
    "I’m done, now you type",
    "Take it and go",
    "That’s All Folks",
    "To infinity – and Beyond",
    "May the Force be with you",
    "May your coffee always be hot",
    "Nananananananananananana",
    "Gotta fly",
    "Poof",

  ];

  setTimeout(function(){
    var result = Math.floor(Math.random() * values.length) + 1;
    $('.winner-name').html(values[result]);
    $('.winner-content').toggle();
  }, 500);

});
