let NoteArray = [];

let NoteObject = function (pData, pType, pPriority) {
    this.data = pData;
    this.type = pType;
    this.priority = pPriority;
};

NoteArray.push ( new NoteObject("Eat Lunch", "Home", 1)  );
NoteArray.push ( new NoteObject("Do 209 HW", "School", 2)  );
NoteArray.push ( new NoteObject("Watch Dune", "Home", 3)  );

let selectedType = "";

// code runs immediately
//================================================================

// runs  when dom is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
        NoteArray.push ( new NoteObject(document.getElementById("dataInput").value, selectedType,
        document.getElementById("priorityInput").value ) );
        
        document.getElementById("dataInput").value = "";
        document.getElementById("priorityInput").value = "";

        createList();
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

});

// function definition for displaying notes
function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    NoteArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        // added data-role="listview" to the ul in the html
        li.innerHTML = element.priority + ":  " + element.type + "   " + element.data;
        myul.appendChild(li);
    });
};

// function definition for adding a new note
function addNote() {
    let data = document.getElementById("newNoteData").value;
    let type = document.getElementById("newNoteType").value;
    let priority = document.getElementById("newNotePriority").value;
    NoteArray.push(new NoteObject(data, type, priority));
    createList();
}

// runs when dom is loaded
document.addEventListener("DOMContentLoaded", function (event) {
    // bind addNote function to "Add Note" button
    document.getElementById("addNoteBtn").addEventListener("click", function() {
        addNote();
        localStorage.setItem("NoteArray", JSON.stringify(NoteArray));
    });

    // load notes from local storage
    if (localStorage.getItem("NoteArray") !== null) {
        NoteArray = JSON.parse(localStorage.getItem("NoteArray"));
        createList();
    }
});

// Countdown timer
let countdowns = document.querySelectorAll('.restaurant-countdown');
countdowns.forEach(countdown => {
    let closingTime = new Date();
    let closingHours = parseInt(countdown.getAttribute('data-time').split(':')[0]);
    let closingMinutes = parseInt(countdown.getAttribute('data-time').split(':')[1]);
    let closingSeconds = parseInt(countdown.getAttribute('data-time').split(':')[2]);
    closingTime.setHours(closingHours, closingMinutes, closingSeconds);
    
    let timeRemaining = closingTime - new Date();
    let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    countdown.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    setInterval(() => {
        timeRemaining = closingTime - new Date();
        hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        countdown.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});

































// let NoteArray = [];

// let NoteObject = function (pData, pType, pPriority) {
//     this.data = pData;
//     this.type = pType;
//     this.priority = pPriority;
// };

// NoteArray.push ( new NoteObject("Eat Lunch", "Home", 1)  );
// NoteArray.push ( new NoteObject("Do 209 HW", "School", 2)  );
// NoteArray.push ( new NoteObject("Watch Dune", "Home", 3)  );

// let selectedType = "";

// // code runs immediately
// //================================================================

// // runs  when dom is loaded
// $(document).on("pagecreate", function(event) {

//     createList();

//     $(document).on("click", "#buttonAdd", function () {
//         let newNoteData = $("#dataInput").val();
//         let newNotePriority = $("#priorityInput").val();
//         NoteArray.push ( new NoteObject(newNoteData, selectedType, newNotePriority ) );
        
//         $("#dataInput").val("");
//         $("#priorityInput").val("");

//         createList();
//         saveNotes();
//     });

//     $(document).on("change", "#select-type", function (event, ui) {
//         selectedType = $("#select-type").val();
//     });

//     loadNotes();
// });

// // function definition for displaying notes
// function createList() {
//     // clear prior data
//     var myul = $("#myul");
//     myul.html("");

//     NoteArray.forEach(function (element,) {   // use handy array forEach method
//         var li = $("<li></li>");
//         li.html(element.priority + ":  " + element.type + "   " + element.data);
//         myul.append(li);
//     });
//     myul.listview("refresh");
// }

// // function definition for adding a new note
// function addNote() {
//     let data = $("#newNoteData").val();
//     let type = $("#newNoteType").val();
//     let priority = $("#newNotePriority").val();
//     NoteArray.push(new NoteObject(data, type, priority));
//     createList();
// }

// // runs when dom is loaded
// $(document).on("pagecreate", "#add-note-page", function (event) {
//     // bind addNote function to "Add Note" button
//     $(document).on("click", "#addNoteBtn", function() {
//         addNote();
//     });
// });

// // Countdown timer
// let countdowns = document.querySelectorAll('.restaurant-countdown');
// countdowns.forEach(countdown => {
//     let closingTime = new Date();
//     let closingHours = parseInt(countdown.getAttribute('data-time').split(':')[0]);
//     let closingMinutes = parseInt(countdown.getAttribute('data-time').split(':')[1]);
//     let closingSeconds = parseInt(countdown.getAttribute('data-time').split(':')[2]);
//     closingTime.setHours(closingHours, closingMinutes, closingSeconds);
    
//     let timeRemaining = closingTime - new Date();
//     let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
//     let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
//     countdown.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
//     setInterval(() => {
//         timeRemaining = closingTime - new Date();
//         hours = Math.floor(timeRemaining / (1000 * 60 * 60));
//         minutes = Math.floor((timeRemaining % (1000




















































