$(document).ready(function() {
$('.saveBtn').on('click', function() {
const blockText = $(this).siblings('.text').val();
var blockTime = $(this).parent().attr('id');
localStorage.setItem(blockTime, blockText);
})
function colorChanges() {
    const momentTime = moment().hours();
    // what momentTime = 12 or 13 or 14 so the military time
    $('.time-block').each(function() {
        var myBlockTime = parseInt($(this).attr('id').split('-')[1]);
        if(myBlockTime > momentTime) {
            $(this).addClass('past')
        } else if (myBlockTime == momentTime) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
         }
    })
}
colorChanges();
let refresher = setInterval(colorChanges, 2000)
// accessing the key of each time block so that the value gets displayed as the saved text opon reload
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