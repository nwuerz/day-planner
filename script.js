// ============================= initialize variables ============================\\
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





// ============================== event handlers =================================\\

// add current day to #current day <p> element in header //

$("#currentDay").text(moment().format('MMMM Do YYYY'));

// user local storage to set and retrieve the input value when the save button is pressed //

$saveBtn.on("click", function(event) {
    var inputVal = $(this).siblings('.userText')[0].value;
    var key = $(this).siblings('.hour')[0].textContent.trim();
     localStorage.setItem(key, inputVal);
});

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

// differentiate current hour from past and future hours via time segment color //

// var currentTime = moment().format('h:mm:ss a');
// console.log(currentTime);

// //if/else statements

// function applyColor() {
//     if (currentTime===??) {
//         $(".userText").attr("id", "present");
//     }

// }

//switch statement

// switch(currentTime) {
//     case '??':
//         result = $(".userText").attr("id", "past");
//         break;
//     case '??':
//         result = $(".userText").attr("id", "present");
//         break;
//     case '??':
//         result = $(".userText").attr("id", "future");
//         break;
// // }
