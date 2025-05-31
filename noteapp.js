function add(){
		var inp = document.getElementById("inp").value;
		var notesContainer = document.getElementById("notes");

//var notes = document.getElementById("notes").innerHTML;
		if (inp.trim() !== "") {
			var note = document.createElement("div");
			note.classList.add("note")
			var noteText = document.createElement("p");
			noteText.textContent = inp;
			var editButton = document.createElement("button")
			editButton.textContent = "Edit";
			editButton.classList.add("edit-button");
			editButton.onclick = function (){
				var newText = prompt("Edit your note:", noteText.textContent);
				if (newText !== null && newText.trim() !== "") {
					noteText.textContent = newText;
				}
			};

			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.classList.add("delete-button");
			deleteButton.onclick = function(){
				notesContainer.removeChild(note);
			};
			note.appendChild(noteText);
			note.appendChild(editButton);
			note.appendChild(deleteButton);
			notesContainer.appendChild(note);
			document.getElementById("inp").value = ""

//	document.getElementById("notes").innerHTML = notes + (notes ? "<br>":"") + inp;
		}
//		document.getElementById("inp").value = "";
	}