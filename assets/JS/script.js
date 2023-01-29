// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
  // ## User Story
  
  // ```md
  // AS AN employee with a busy schedule
  // I WANT to add important events to a daily planner
  // SO THAT I can manage my time effectively
  // ```
  
  // ## Acceptance Criteria
  // GIVEN I am using a daily planner to create a schedule
  
  // WHEN I open the planner
  // THEN the current day is displayed at the top of the calendar
    // We want to use dayJS to display the current date
    // Make sure the DayJS CDN link exist in HTML file
      // Create a variable, get DayJS data
    // Set the format: HH;MM;SS...etc
    // Go to that website (the docs)
    // Set the current time to an element in the HTML
  
  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
    // Complete the rest of the timeblocks from the three that were given in the HTML file
      // Remove static past, present, and future classes
      // Find a way to programmatically add or remove the appropriate class
      // NOTE: Colors need to shift at the START of a new hour. Maybe yse While Loop? Do we need to set a standard business hours?
  
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    // 
  
  // WHEN I click into a timeblock
  // THEN I can enter an event
    // Grb text input (text areas)
  
  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage
    // EventListener on save button
      // Create variable, get the value (can be global), get the value
      // set it to local storage
  
  // WHEN I refresh the page
  // THEN the saved events persist
    // LocalStorage
  // ```

  var todaysDate = dayjs();
  $('#currentDay').text(todaysDate.format('MMM D, YYYY'));
  console.log(todaysDate);


  var currentHour = dayjs().hour();
  console.log(currentHour);
  

  for (let index = 9; index < 18; index++) {
    var hour = $('#hour-' + index)
    console.log(hour);

    if (index < currentHour) {
      hour.addClass('past')
    }
    if (index == currentHour){
      hour.addClass('present')
    }
    if (index > currentHour) {
      hour.addClass('future')
    }
    
    var textArea = localStorage.getItem('hour-' + index);
    console.log(textArea);
    hour.children('textarea').val(textArea); 
}

var saveBtn = $('.btn');

function save () {
  var textArea = $(this).siblings('textarea');
  var timeBlock = $(this).parent().attr('id');
  localStorage.setItem(timeBlock, textArea.val())
}

saveBtn.on('click', save);