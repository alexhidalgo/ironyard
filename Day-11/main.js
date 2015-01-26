function getClockTime()
{
   var now    = new Date();
   var hour   = now.getHours();
   var minute = now.getMinutes();
   var seconds = now.getSeconds();
   if (hour   > 12) { hour = hour - 12;      }
   if (hour   == 0) { hour = 12;             }
   if (minute < 10) { minute = "0" + minute; }
   var timeString = hour +
                    ':' +
                    minute +
                    ':' +
                    seconds;


    document.getElementById('clock').innerHTML = timeString;
    // document.body.style.transform: rotate(30deg);


    var elemHour = document.getElementById('hour-box');
    elemHour.style.transform = 'rotate(' + hour + 'deg)';

    var elemMinute = document.getElementById('minute-box');
    elemMinute.style.transform = 'rotate(' + minute + 'deg)';

    var elemSecond = document.getElementById('second-box');
    elemSecond.style.transform = 'rotate(' + seconds + 2 + 'deg)';

}

getClockTime();
window.setInterval(getClockTime, 1000);

// function animateBg() {
//     document.body.style.backgroundColor = 'hsl(' + i + ', 100%, 50%)';

//     window.setInterval(animateBg, 1000);

//     // setTimeout(function() {
//     //     animateBg(++i);
//     // }, i);
// }

var i = 0;
function animateBg() {

    i++;

    document.body.style.backgroundColor = 'hsl(' + i + ', 100%, 50%)';

    // setTimeout(function() {
    //     animateBg(++i);
    // }, i);
  console.log(i);
}

animateBg();
setInterval(animateBg, 250);


