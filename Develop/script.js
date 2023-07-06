// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//if input in text area,s want to save to local storage
//get text from text atorea, each have their own button
function saveEntry(idToSave) {
  var textarea = $(idToSave).find('textarea').text();
  localStorage.setItem(idToSave, textarea);
  console.log("I saved" + textarea)
}

$('#hour-9').find('#currentDay');

var currentTime = dayjs();
var currentHour = dayjs().format('h');

function headerTime() {
  $('#currentDay').html(currentTime);
}

headerTime();

var times = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
console.log(currentTime)

var targetIndex;

$(function () {
  for (let i = 0; i < times.length; i++) {
    if (times[i] === currentHour) {
      var targetIndex = i;
      $('#hour-' + times[i]).addClass('row time-block present');
    }
  }
  for (let i = 0; i < targetIndex; i++) {
    $('#hour-' + times[i]).addClass('row time-block past');
  }
  for (let i = targetIndex + 1; i < times.length; i++) {
    $('#hour-' + times[i]).addClass('row time-block future');
  }
}
  //loop over indexes of array, for a given index, save that - var targetIndex
  //jeremy -- present
  //all indexes before -- past
  //all indexes after -- future
  //loop over elemetns in Array
  //set target = index



  //check if it's the current time
  //if you haven't yet reached the current time, if it is the current time set to present, all others are future
  //if you've found current in previous loops, then do future

//
//$(function () {
  //$('#hour-9').find('button').click(function() {saveEntry('#hour-9')});



//if it is current time, then class should be present
//past should be past class
//future should be future class

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  //Puts time into box 

  //if it is current time, connect to current time class -- before connect to past class, future connect to future

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
);
