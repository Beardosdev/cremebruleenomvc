$(document).ready(function() {


    

    var d = new Date();
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var m = months[d.getMonth()];
    
    $(".output").append("<h1>" + m + "</h1><br>");

    day = d.getDate();

    var newD = new Date();
    newD.setDate(d.getDate() - day+1);
    week = newD.getDay();
    newD.setDate(newD.getDate() - week);
    
    alert(week);
    var text = "";
    var i = 0;
    while (i < 35) {
        if (newD == d) {
            text += '<li><span class="active">' + newD.toString() + '</span></li>';
        }
        else {
            text += "<li>";
            text += newD.toString();
            text += "</li>";
        }
        newD.setDate(newD.getDate() + 1);
        i++;
    }

    //var k = 0;
    //while (k < dayWeek-2)
    //{
    //    text += "<li></li>";
    //    k++;
    //}

    //var i = 1;
    //while (i < day-1) {
    //    text += "<li>" + i;
    //    text += "</li>";
    //    i++;
    //}
    //text += '<li><span class="active">' + day + '</span></li>';
    //var j = day + 1;
    //while (j < 32)
    //{
    //    text += "<li>" + j;
    //    text += "</li>";
    //    j++;
    //}
   

    $(".days").append(text);

});
