const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes)  {
    notes.forEach(note => {
        addNote(note)
    });
}

addBtn.addEventListener("click", () => addNote());

function updateLS() {    
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value)
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

function addNote(text = "")  {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = 
    `
    <div class="tools">
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector(".edit"),
        deleteBtn = note.querySelector(".delete"),
        main = note.querySelector(".main"),
        textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener("click", () => {
        note.remove();
        updateLS();
    });    

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    textArea.addEventListener("input", (e) => {
        const {value} = e.target;
        main.innerHTML = marked(value);
        updateLS();
    });

    document.body.appendChild(note)
}

const deleteAllBtn = document.getElementById("delete-all");
deleteAllBtn.addEventListener("click", () => {
    const allNotes = document.querySelectorAll('.note');
    allNotes.forEach(note => note.remove());
    localStorage.removeItem("notes");
});