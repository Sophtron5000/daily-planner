//moment used to get current time
var time 

setInterval(() => {
    time = moment().format('LLLL');
    $('#currentDay').text("Today is " + time);
    console.log(time)
}, 1000);
//function to run at click of save button
$(document).ready(function() {
$('.saveBtn').on('click', function() {
const blockText = $(this).siblings('.text').val(); //calls on text value of class text
var blockTime = $(this).parent().attr('id'); //calls on the time id of the text value
localStorage.setItem(blockTime, blockText); //stores both values to local storage
})
function colorChanges() { //function to change colors
    const momentTime = moment().hours(); //calls on the current time of day
    $('.time-block').each(function() { //a function that applies to all with a class of time-block
        var myBlockTime = parseInt($(this).attr('id').split('-')[1]); //id is being split and the variable is the value of the number hour
        if(myBlockTime > momentTime) { //compares the id hour to the current hour
            $(this).addClass('past') //class to be added if true; this will add styling
        } else if (myBlockTime == momentTime) {
            $(this).removeClass('past') //elseif remove the class and add the class of present
            $(this).addClass('present')
        } else { //otherwise remove the current classes and replace with future
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
         }
    })
}
colorChanges();
let refresher = setInterval(colorChanges, 2000)
// accessing the key of each time block so that the value gets displayed as the saved text upon reload
$('#hour-9 .text').val(localStorage.getItem('hour-9'));
$('#hour-10 .text').val(localStorage.getItem('hour-10'))
$('#hour-11 .text').val(localStorage.getItem('hour-11'))
$('#hour-12 .text').val(localStorage.getItem('hour-12'))
$('#hour-13 .text').val(localStorage.getItem('hour-13'))
$('#hour-14 .text').val(localStorage.getItem('hour-14'))
$('#hour-15 .text').val(localStorage.getItem('hour-15'))
$('#hour-16 .text').val(localStorage.getItem('hour-16'))
$('#hour-17 .text').val(localStorage.getItem('hour-17'))
})