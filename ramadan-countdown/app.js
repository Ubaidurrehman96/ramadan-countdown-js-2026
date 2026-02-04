// Note:
// Ramzan date is not confirmed yet.
// If Ramzan starts on 18 Feb, then use: new Date("February 18, 2026").
// If it starts on 19 Feb, just change 18 to 19.
// For now, 18 Feb is used as an assumed date.

var ramzanDate = new Date("febuary 18, 2026").getTime();

setInterval(function(){
    var now = new Date().getTime();
    var diff = ramzanDate - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);


