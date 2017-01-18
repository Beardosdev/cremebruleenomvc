$(document).ready(function() {


    

    var d = new Date();
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var m = months[d.getMonth()];
    
    $(".output").append("<h1>" + m + "</h1><br>");

    day = d.getDate();
    dayWeek = d.getDay();
    
    popMonth = d - day;
    alert(dayWeek.toString());
    $(".days").append("<li>"+ day +"</li>");

});
