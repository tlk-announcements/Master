
// Code for determining and updating the year of graduation

var x = setInterval(function() {
    if ((new Date().getHours < 15 ) && (new Date().getHours > 7 )){
        if ((new Date().getHours == 14) && (new Date().getMinutes < 36)){
            document.getElementById("bar-of-progress").style = "width = 100%";
        } else if ((new Date().getHours == 8) && (new Date().getMinutes < 20)){
            document.getElementById("bar-of-progress").style = "width = 100%";
        } else{
            var de_time = ((new Date().getHours - 8) * 60) + new Date().getMinutes;
            var precent_don = (de_time / 380) * 100;
            document.getElementById("bar-of-progress").style = "width = " + precent_don +"%;"

        }
    } else {
        document.getElementById("bar-of-progress").style = "width = 100%"
    }
}, 10000);
