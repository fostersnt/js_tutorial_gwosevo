heading = document.getElementById("head").innerHTML = "This is a wonderful experience!"

document.getElementById("para").innerHTML = "I am very grateful";

// document.getElementsByTagName("button")

    //Onclick background color changes
    
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime"];
    let currentColorIndex = -1; 

    document.getElementById('changeColorButton').addEventListener('click', function() {
        currentColorIndex < colors.length - 1
            currentColorIndex++;
            document.getElementById('bgbody').style.backgroundColor = colors[currentColorIndex];
        } 
    );

    // Onclick of the button 'New item' is added to the null list
    document.getElementById("new-item").onclick = function newitemfn(){
        const newlistItem = document.createElement("li");
        const NewItem = document.createTextNode("New item");
        newlistItem.appendChild(NewItem);
        document.getElementById("newlist").appendChild(newlistItem);

    };

    // Onclick of the button the paragraph change color
    document.getElementById("P-color").onclick = function(){
        document.querySelector(".Togg").style.color = "red";
    };

    
    //Onclick of the button Hide/Show the paragraph
    document.getElementById("show").onclick = function(){
        if (document.querySelector(".Togg").style.display === 'block') {
        document.querySelector(".Togg").style.display  = 'none';
    } else {
        document.querySelector(".Togg").style.display = 'block';
    };
}
