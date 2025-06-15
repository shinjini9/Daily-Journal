const form = document.getElementById("entryForm");
const entryText = document.getElementById("entryText");
const entriesDiv = document.getElementById("entries");

let entries = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const date = new Date().toLocaleDateString();
  const text = entryText.value;
  entries.push({ date, text });
  entryText.value = "";
  displayEntries();
});

function displayEntries() {
  entriesDiv.innerHTML = "";
  entries.forEach((entry, index) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <p><strong>${entry.date}</strong></p>
      <p>${entry.text}</p>
      <button onclick="editEntry(${index})">Edit</button>
      <button onclick="deleteEntry(${index})">Delete</button>
    `;
    entriesDiv.appendChild(div);
  });
}

function editEntry(index) {
  const newText = prompt("Edit your entry:", entries[index].text);
  if (newText) {
    entries[index].text = newText;
    displayEntries();
  }
}

function deleteEntry(index) {
  entries.splice(index, 1);
  displayEntries();
}
