showNotes();

let addbtn = document.getElementById('addBtn')
addbtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes');
    let addtitle = document.getElementById('addtitle')// for title
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        title: addtitle.value,
        text: addTxt.value
    }

    // notesObj.push(addtxt.value)

    notesObj.push(myobj);

    localStorage.setItem('notes', JSON.stringify(notesObj))

    addTxt.value = '';
    addtitle.value = "";


    showNotes();
})




function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    html = "";
    notesObj.forEach(function (element, index) {
        html = html + ` 
         <div class="notecard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${element.title}</h5>
            <p class="card-text" id="showNotes">${element.text}</p>
           
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>

        </div>
    </div>`

    });
   



let notesElem = document.getElementById("notes")
if (notesObj.length != 0) {
    notesElem.innerHTML = html;
}
else {
    notesElem.innerHTML = `nothing to show`
}
}

// ----------- to delete notes -----------

function deleteNote(index) {
    console.log("i am deletting", index);

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    // console.log(typeof(notesObj))
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes()
}

//------ code for search-----------

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
    // console.log(seach.value);
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt)

        if (cardtxt.includes(inputVal)) {
            element.style.display = 'block'
        }
        else {
            element.style.display = "none"
        }

    })
})