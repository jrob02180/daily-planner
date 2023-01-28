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


// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
  // We want to use DayJS to display the current date
  // Make sure the DayJS CDN Link exists in the HTML file
    // Create a variabe, get DayJS data
    // Go to the Docs
      // Set the format: HH:MM:SS....etc...
    // Set the current time to an element in the HTML

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
  // Complete the rest of the timeblocks from the three that were given to us in the HTML file
    // remove static past, present and future classes
    // find a way to prorammatically (function) add or remove the appropriate class
    // NOTE: Colors need to shift at the START of a new hour. Do we even need to worry about minutes? 12:00 vs 12:59? Maybe use While Loop? Do we need to set standard business hours?

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present or future
  // Compare the time block (the hour that itis ) against the current time from DayJS(). Then apply the correct class based on the comparison in time.

// WHEN I click into a timeblock
// THEN I can enter a text
  // Grab text input (text areas)

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
  // EventListener on the save button
    // Create variable (can be global), get the value
    // set it to local storage
      // times: [{}, {}]

// When I refresh the page
// THEN the saved events persist (confirms that data was entered into LocalStoreage)
  // Getting from LocalStorage
  // Parse the data from LocalStorage to turn it back into an object (If the data was stored as a JSON)
  // To have it display s the string it was entered as