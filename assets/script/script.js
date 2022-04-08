// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var time 

setInterval(() => {
    time = moment().format('LLLL');
    $('#currentDay').text("Today is " + time);
    console.log(time)
}, 1000);
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
var taskInput = $('#task')
  
var taskDisplay = function(str) {
  for (var i = 0; i < 10; i++) {
    var task = $('<div>')
    task.addClass("row time-block")
    task.attr('id', i)

  }
  columnCard.att('id', i)
  task.append(taskInput)

}


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
var textInputValue1 = document.getElementById('9am')
var textInputValue2 = document.getElementById('10am')
var textInputValue3 = document.getElementById('11am')
var textInputValue4 = document.getElementById('12pm')
var textInputValue5 = document.getElementById('1pm')
var textInputValue6 = document.getElementById('2pm')
var textInputValue7 = document.getElementById('3pm')
var textInputValue8 = document.getElementById('4pm')
var textInputValue9 = document.getElementById('5pm')

saveBtn.addEventListener("click", function(event) {
	event.preventDefault();

var dateInfo = {
  hour1: textInputValue1.value,
  hour2: textInputValue2.value,
  hour3: textInputValue3.value,
  hour4: textInputValue4.value,
  hour5: textInputValue5.value,
  hour6: textInputValue6.value,
  hour7: textInputValue7.value,
  hour8: textInputValue8.value,
  hour9: textInputValue9.value,

}

localStorage.setItem('dailyTaskStringify', JSON.stringify(dateInfo));
localStorage.setItem('daily-task', dateInfo)

localStorage.setItem("ArrayStringify", JSON.stringify(["dailyTask", 1,2 ]));
	localStorage.setItem("Array", ["dailyTask", 1,2 ]);

	renderMessage();

});
// WHEN I refresh the page
// THEN the saved events persist
function renderMessage() {
 
	//Object Getting
  var lastTask = JSON.parse(localStorage.getItem("dailyTaskStringify"));
  // var lastGrade = localStorage.getItem("studentGrade");
  
  //Array Getting
  var arr = JSON.parse(localStorage.getItem("ArrayStringify"));
  console.log(arr[0])//"studentGrade" Beacause ["studentGrade", 1,2 ]

  var arrStr = localStorage.getItem("Array");
  // arrStr = "studentGrade,1,2"
  
  console.log(arrStr[0])//s Beacuse "studentGrade,1,2"
  if (lastTask !== null) {
    document.querySelector(".message").textContent = lastTask
  }
}



{/* <div class="block border-0" id="9am">9am</div>
<div class="block" id="10am">10am</div>
<div class="block" id="11am">11am</div>
<div class="block" id="12pm">12pm</div>
<div class="block" id="1pm">1pm</div>
<div class="block" id="2pm">2pam</div>
<div class="block" id="3pm">3pm</div>
<div class="block" id="4pm">4pm</div>
<div class="block" id="5pm">5pm</div> */}

{/* <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A third item</li>
        </ul> */}