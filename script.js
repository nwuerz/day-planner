var currentHour = moment().hours();
var $saveBtn = $(".saveBtn");
var userText = $(".userText").val();

Array.from($('div[id^="hour-"]')).forEach(function(el) {

    var key = $(el).find('.hour')[0].textContent.trim();
    var data = localStorage.getItem(key);
    if(data) {
        $(el).find('.userText').val(data);
    }

});

// add current day to #current day <p> element in header //

$("#currentDay").text(moment().format('MMMM Do YYYY'));

// use local storage to set and retrieve the input value of THIS segment when the save button is pressed //

$saveBtn.on("click", function() {
    var inputVal = $(this).siblings('.userText')[0].value;
    var key = $(this).siblings('.hour')[0].textContent.trim();
     localStorage.setItem(key, inputVal);
});

// add past, present and future class attribute to the corresponding time segment, based on the current time of day //

Array.from($('div[id^="hour-"]')).forEach(function(el) {

        var currentHour = parseInt($(el).attr('id').replace('hour-', ''));
        if(currentHour < 9) {
            currentHour+=12;
        }

        var currentTime = moment().hours();
    if(currentHour < currentTime)
        result = $(el).find('.userText').addClass("past");
    if(currentHour === currentTime)
        result = $(el).find('.userText').addClass("present");
    if(currentHour > currentTime)
        result = $(el).find('.userText').addClass("future");
});
