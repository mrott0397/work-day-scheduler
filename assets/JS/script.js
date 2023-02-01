  // Adding the date dayjs
  var todaysDate = dayjs();
  $('#currentDay').text(todaysDate.format('MMM D, YYYY'));
  console.log(todaysDate);

// Targeting the current hour using dayjs
  var currentHour = dayjs().hour();
  console.log(currentHour);
  

// a for loop to iterate through the workday hours we have set (9-5) and applying the color shading using the addClass method 
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

// saving to local storage 
function save () {
  var textArea = $(this).siblings('textarea');
  var timeBlock = $(this).parent().attr('id');
  localStorage.setItem(timeBlock, textArea.val())
}

saveBtn.on('click', save);