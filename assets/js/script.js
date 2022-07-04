//  Declare current time
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().format("HH");

// Declare current day html element
var currentDayEl = $("#currentDay");
// Declare time block container element
var containerEl = $(".container");
// Render a block for each hour of the day
var timeBlockArray = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

// Display the current date in jumbotron
function displayDate() {
  var date = moment().format("dddd, MMMM Do YYYY");
  currentDayEl.text(date);
}

// create timeblocks
function displayTimeBlock() {
  for (var i = 0; i < timeBlockArray.length; i++) {
    // attempt to get saved data for hour of loop 
    var hour = "hour-" + (i+9);

    // Compare i to current hour to determine if this hour is in the past, present, or future
    var whatTimeIsIt = "";

    if (i+9 < currentHour) {
        whatTimeIsIt = "past";
    } else if (i+9 == currentHour) {
        whatTimeIsIt = "present";
    } else {
        whatTimeIsIt = "future";
    }
  
    // This is the text displayed and saved to local storage
    function storageTextHandler(hour) {
        if(localStorage.getItem(hour)){
            return localStorage.getItem(hour)
        } else {
            return ""
        }
    }
    // Template literal
    var template = `
    <div class="row">
        <div class="col-2">
             ${timeBlockArray[i]}
        </div>
        <textarea class="col-8 ${whatTimeIsIt}">${storageTextHandler(hour)}</textarea>
        <button class="col-2 saveBtn" data-hour="${hour}">Save</button>
    </div>
    `;

    // append html to page to container element
    containerEl.append(template);
  }
}

displayDate();
displayTimeBlock();

// Save to local storage 
function saveToLocal(event) {
    console.log(event.target)
    var textValue = $(this).prev().val();
    var hourKey = $(this).attr("data-hour");
    console.log(textValue, hourKey)

    localStorage.setItem(hourKey,textValue)
}

$(document).on("click", "button", saveToLocal)