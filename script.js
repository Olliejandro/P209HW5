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


//======================================
// function defintions
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
          seconds = Math.floor((time
