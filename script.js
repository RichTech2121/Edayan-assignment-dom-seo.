// Change paragraph text
function changeText() {
    document.getElementById("myParagraph").innerText = "Football brings excitement, energy, and unity to people all over the world.";
}

// Add a new list item
function addListItem() {
    let ul = document.getElementById("myList");
    let li = document.createElement("li");
    li.innerText = "Practicing skills and drills";
    ul.appendChild(li);
}

// Remove an element (paragraph in this case)
function removeElement() {
    let paragraph = document.getElementById("myParagraph");
    if (paragraph) {
        paragraph.remove();
    }
}
