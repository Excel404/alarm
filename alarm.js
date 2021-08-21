let alarmInterface= document.getElementById('alarm-interface');

let alarmButton= document.getElementById("alarm-button");
alarmInterface.style.width = window.screen.innerWidth;
alarmInterface.style.height = window.screen.innerHeight;
let hourElem = document.getElementById('input-hour');
let minuteElem = document.getElementById('input-minute');
let timeDivElem = document.getElementsByName('dayTime');

function CreateAlarm(hour,minute){
  this.displayDiv = document.createElement("div");
  this.displayDiv.setAttribute('id', 'displayDiv');
  this.header = document.createElement("span");
  this.header.innerHTML ='Upcoming Alarm'+ '<br>';
  this.time = document.createElement("span");
  this.cancel = document.createElement('button');
  this.cancel.innerHTML = 'Delete';
  this.cancel.onclick= ()=>{
    alarmInterface.removeChild(this.displayDiv);
  }
  this.space = document.createElement('br');
  this.snoozeBtn = document.createElement("button");
  this.snoozeBtn.innerHTML = 'Snooze';
  this.snoozeBtn.onclick = snoozeAlarm;
  this.dismissBtn = document.createElement("button");
  this.dismissBtn.innerHTML = 'Dismiss';
  this.dismissBtn.onclick = dismissAlarm;
  this.displayDiv.appendChild(this.header);
  this.displayDiv.appendChild(this.time);
  this.displayDiv.appendChild(this.cancel);
  this.displayDiv.appendChild(this.space);
  alarmInterface.appendChild(this.displayDiv);  
  
  let checkAlarm =()=>{
    hour = parseInt(hourElem.value);
    minute = parseInt(minuteElem.value);
    let setTime = new Date();
    var currentHour = setTime.getHours();
    var currentMinute = setTime.getMinutes();
    var currentTime = currentHour*3600 + currentMinute*60;
    var setTime2 = hour*3600 + minute*60;
    var timeRem = setTime2 - currentTime;
    var timeRem1 = hour - currentHour;
    var timeRem2 = minute - currentMinute;
    if(hour!= 12){
      if(timeDivElem[0].checked){
      
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[0].value+' ';      
        if (setTime2==currentTime){
          this.header.innerHTML ='Alarm'+ '<br>';
          this.displayDiv.appendChild(this.dismissBtn);
          this.displayDiv.appendChild(this.snoozeBtn);

          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
      
        }
      }else if(timeDivElem[1].checked){
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[1].value+' ';
        hour = parseInt(hourElem.value)+12;
        setTime2 = hour*3600 + minute*60;
        timeRem = setTime2 - currentTime;
        timeRem1 = hour - currentHour;
        timeRem2 = minute - currentMinute;
        if (setTime2==currentTime){
          this.header.innerHTML ='Alarm'+ '<br>';
          this.displayDiv.appendChild(this.dismissBtn);
          this.displayDiv.appendChild(this.snoozeBtn);

          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
      
        }
      }
    }else{
      if(timeDivElem[0].checked){
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[0].value+' ';
        hour = 0;
        setTime2 = hour*3600 + minute*60;
        timeRem = setTime2 - currentTime;
        timeRem1 = 24 - currentHour;
        timeRem2 = minute - currentMinute;
        if (setTime2==currentTime){
          this.header.innerHTML ='Alarm'+ '<br>';
          this.displayDiv.appendChild(this.dismissBtn);
          this.displayDiv.appendChild(this.snoozeBtn);
          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
      
        }
        
      }else if(timeDivElem[1].checked){
        this.time.innerHTML = hourElem.value +':'+ minuteElem.value+ timeDivElem[0].value+' ';      
        if (setTime2==currentTime){
          this.header.innerHTML ='Alarm'+ '<br>';
          this.displayDiv.appendChild(this.dismissBtn);
          this.displayDiv.appendChild(this.snoozeBtn);

          alarmRing();
        }
        else{
          alert(`Alarm set for ${timeRem1}hours ${timeRem2}Minutes from now`);
          window.setTimeout(checkAlarm, Math.abs(timeRem)*1000);
      
        }
      }
    }
    
  }
  checkAlarm();
  function alarmRing(){
    
    navigator.vibrate([800,200,800,200,800,200,800,200,800,300,800]);
    //alert('wakeup');
    
  }
  var snooze
  function snoozeAlarm(){
    console.log('snooze');
    snooze = window.setInterval(alarmRing, 5000);
  }
  function dismissAlarm(){
    console.log('dismiss');
    window.clearInterval(snooze);
  }
}
