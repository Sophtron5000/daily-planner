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
  for (var i = 0; i < 10; i++)
var taskDisplay = function(str) {
  columnCard.att('id', i)
  taskDisplay.append(taskInput)

}


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
var textInputValue = $('textarea').val()

var dateInfo = {
  hour1: textInputValue

}
// WHEN I refresh the page
// THEN the saved events persist


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