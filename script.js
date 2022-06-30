//  Declare current time 
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().format('H');

// Declare current day html element
var currentDayEl = $("#currentDay");
// Declare var time block container element
var containerEl = $("#timeBlock");
// Render a block for each hour of the day
var timeBlockArray = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


// Display the current date in jumbotron
function displayDate() {
    var date = moment().format('dddd, MMMM Do YYYY');
    currentDayEl.text(date);
}

// create timeblocks 
function displayTimeBlock() {

    for ( var i = 9; i <= 17; i++) {
        timeBlockArray[i];

    // attempt to get saved data for hour of loop (local storage

    var hour = "hour-"+i;

    var data = $("#timeBlock");

    // Compare i to current hour to determine if this hour is in the past, present, or future
   
    var template = `
    <div class="row">
        <div>
             ${i}AM/PM 
        </div>
        <div>
            <textarea>${data}</textarea>
        </div>
        <div>
            <button data-hour="${i}">Save</button>
        </div>
        
        </div>
    `;

    // append html to page to container element 
    containerEl.append(template);

}
}

// Set up a "click" event listener on the container
containerEl.on("click", "button", function(event) {

    //  fetch the hour from the clicked button's data-hour attribute
    event.target.matches("button");

    // Use the hour to create the key for local storage

    // From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value

    // Use the key and the value to save into local storage 

});


// Save an hour to local storage



displayDate();
displayTimeBlock();