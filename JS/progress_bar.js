
// Code for determining and updating the year of graduation

function progress() {
    var day_bar = document.getElementById("day-progress");
    var text_day = document.getElementById("per_day");

    var week_bar = document.getElementById("week-progress");
    var text_week = document.getElementById("per_week");

    var day = new Date().getDay();

    if ((day == 0)||(day == 6)){
        day_bar.style = "width: 100%";
        text_day.innerHTML = "No school today!"
        week_bar.style = "width: 100%";
        text_week.innerHTML = "Enjoy the weekend!"
    } else{
        if ((new Date().getHours() < 15 ) && (new Date().getHours() > 7 )){
            if ((new Date().getHours() == 14) && (new Date().getMinutes() > 36)){
                day_bar.style = "width: 100%";
                text_day.innerHTML = "You're done the school day!"
                week_bar.style = "width: " + String(Math.round((day/5) * 100)) + "%;";
                text_week.innerHTML = "You are " + String(Math.round((day/5) * 100)) + "% through the school week";

            } else if ((new Date().getHours() == 8) && (new Date().getMinutes() < 20)){
                day_bar.style = "width: 0%";
                text_day.innerHTML = "Get ready to start the school day"
                week_bar.style = "width: " + String(Math.round(((day-1)/5) * 100)) + "%;";
                text_week.innerHTML = "You are " + String(Math.round(((day-1)/5) * 100)) + "% through the school week";

            } else{
                var de_time = ((new Date().getHours() - 8) * 60) + new Date().getMinutes();
                var precent_don = Math.round((de_time / 380) * 100);
                day_bar.style = "width: " + precent_don +"%;"
                text_day.innerHTML = "You are " + String(precent_don) + "% done the school day."
                week_bar.style = "width: " + String(Math.round((day/5) * 100)) + "%;";
                text_week.innerHTML = "You are " + String(Math.round((day/5) * 100)) + "% through the school week";
            }
        }else {
            day_bar.style = "width: 100%";
            text_day.innerHTML = "You're done the school day!";
            console.log("done");
            week_bar.style = "width: " + String(Math.round((day/5) * 100)) + "%;";
            text_week.innerHTML = "You are " + String(Math.round((day/5) * 100)) + "% through the school week";
        }
    }


}
