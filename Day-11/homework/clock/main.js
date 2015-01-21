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



    // var elem = document.getElementById('hour-box');
    // elem.style.height = seconds + 'px';
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

//JavaScript syntax: object.style.height="500px"
