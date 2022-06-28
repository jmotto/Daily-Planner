//  Declare current time 
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log(currentTime);

// Declare current hour - 24 hour format
var currentHour = moment().format('H');

    console.log(currentHour);

// Declare current day html element

var currentDay = document.getElementById("#currentDay");
    

// Declare var time block container element

var containerEl = document.getElementsByClassName("container");

// Render a block for each hour of the day

var timeBlockArray = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
for(var i = 9; i <=17; i++) {

    // attempt to get saved data for hour of loop (local storage
    var key = "hour-"+i;

    var data = " ";

    // Compare i to current hour to determine if this hour is in the past, present, or future
   
    var template = `
    <div class="row">
        <div>
             ${i}AM
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



