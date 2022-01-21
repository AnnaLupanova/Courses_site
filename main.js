var deadline= new Date("January 23 2022 00:00:00 GMT+0300").getTime();

var time = setInterval(function (){
    var remainder_time = deadline - new Date().getTime();
    var days = Math.floor(remainder_time/(1000 * 60 * 60 * 24));
    var hours = Math.floor((remainder_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainder_time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainder_time % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000)
