
let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
	localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
	const notesContainer = document.getElementById("notes");
	notesContainer.innerHTML = ""; // Clear existing notes
	notes.forEach((text, index) => {
		const note = document.createElement("div");
		note.classList.add("note");

		const noteText = document.createElement("p");
		noteText.textContent = text;

		const editButton = document.createElement("button");
		editButton.textContent = "Edit";
		editButton.classList.add("edit-button");
		editButton.onclick = function () {
			const newText = prompt("Edit your note:", noteText.textContent);
			if (newText !== null && newText.trim() !== "") {
				notes[index] = newText;
				saveNotes();
				renderNotes();
			}
		};

		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.classList.add("delete-button");
		deleteButton.onclick = function () {
			notes.splice(index, 1);
			saveNotes();
			renderNotes();
		};

		note.appendChild(noteText);
		note.appendChild(editButton);
		note.appendChild(deleteButton);
		notesContainer.appendChild(note);
	});
}

function add() {
	const inp = document.getElementById("inp").value;
	if (inp.trim() !== "") {
		notes.push(inp);
		saveNotes();
		renderNotes();
		document.getElementById("inp").value = "";
	}
}

// Load notes on page load
window.onload = renderNotes;
```
