var alarmInterface= document.createElement('div');
alarmInterface.setAttribute("class","alarm-interface");
var alarmButton= document.createElement("button");
alarmButton.setAttribute("class","alarm-button");
alarmButton.innerHTML = "Create Alarm";
alarmInterface.appendChild(alarmButton);
document.body.appendChild(alarmInterface);

var self= this;
function alarm(){
  self.hourLabel= document.createElement("span");
  self.hourLabel.innerHTML= "<br>"+"<br>"+'Hour';
  alarmInterface.appendChild(self.hourLabel);
  self.inputHour= document.createElement("input");
  self.inputHour.setAttribute("class","input-hour");
  self.inputHour.setAttribute("type","text");
  self.minuteLabel= document.createElement("span");
  self.minuteLabel.innerHTML= "  "+"Min";
  self.inputMinute=  document.createElement("input");
  self.inputMinute.setAttribute("class","input-minute");
  self.inputMinute.setAttribute("type","text");
  
  self.setButton= document.createElement("button");
  self.setButton.setAttribute("class","set-button");
  self.setButton.innerHTML= "Set Alarm";
  
  alarmInterface.appendChild(self.inputHour);
  alarmInterface.appendChild(self.minuteLabel);
  alarmInterface.appendChild(self.inputMinute);
  alarmInterface.appendChild(self.setButton);
  
  function createAlarm(Hour,Minute){
    self.setTime= new Date()
    var Year = self.setTime.getFullYear();
    var Month= self.setTime.getMonth();
    var Hour= self.inputHour.value;
    var Minute= self.inputMinute.value;
    var date = self.setTime.getDate();
    self.setTime1= new Date(Year,Month,date,Hour,Minute);
    var currentTime= self.setTime.getTime();
    var setTime2= self.setTime1.getTime();
    var currentHour = self.setTime.getHours();
    var currentMinute= self.setTime.getMinutes();
    
    function repeat(){
      var timeRem = setTime2- currentTime;
      console.log(Hour +":"+ Minute) 
      var timeRem1 = Hour - currentHour;
      var timeRem2 = Minute - currentMinute;
      console.log(timeRem);
      if (setTime2==currentTime ){
        alarmRing();
      }
      else{
        alert(timeRem1 +"hours :"+ timeRem2 +"Minutes remaining");
        window.setTimeout(alarmRing, Math.abs(timeRem));
    
      }
    }
    repeat();
   
  }
  function alarmRing(){
    alert("Wake up, its time");
      var snooze= prompt("Do you want to snooze alarm:");
      if(snooze!="no"){
        var snoozeTime= prompt("Snooze time in seconds");
        
        window.setTimeout(alarmRing, snoozeTime*1000);
      }else{
        alert("Thank God you are awake")
      }
  }
  
  self.setButton.addEventListener("click",createAlarm);
  
}
alarmButton.addEventListener("click",alarm);

