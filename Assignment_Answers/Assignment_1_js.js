//Change the text of the header eh
document.querySelector("h1").innerHTML = "Hello, World";
            
// Change the paragraph text and add a new list item when the button is clicked
document.getElementById("myBtn").onclick = function ChangeMe(){
    document.querySelector("p").innerHTML = "This text has been changed!";

    const fruitlist= document.getElementById("fruitlist");
    const newlistItem = document.createElement("li");
    newlistItem.textContent = "New Fruit";
    fruitlist.appendChild(newlistItem);
};

document.getElementById("addFruit").onclick = function addFruitfn(){
    const fruitlist= document.getElementById("fruitlist");
    const newlistItem = document.createElement("li");
    const NewFruit = document.getElementById("fruit").value;
    newlistItem.textContent = NewFruit;
    fruitlist.appendChild(newlistItem);

};