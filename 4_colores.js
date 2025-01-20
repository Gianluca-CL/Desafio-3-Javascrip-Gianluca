const divs = Array.from(document.querySelectorAll("div[id^='div']"));
divs.forEach(div => {
    div.addEventListener("click", () => {
        div.style.backgroundColor = 'black';
    });
});

document.addEventListener("keydown", (event) => {
    const keyDiv = document.getElementById("key");
    const colorMap = {
        'a': 'pink',
        's': 'orange',
        'd': 'skyblue',
        'q': 'purple',
        'w': 'gray',
        'e': 'brown'
    };

    if (colorMap[event.key]) {
        if (['q', 'w', 'e'].includes(event.key)) {
            const newDiv = document.createElement("div");
            newDiv.style.width = "200px";
            newDiv.style.height = "200px";
            newDiv.style.backgroundColor = colorMap[event.key];
            newDiv.style.border = "1px solid black";
            document.body.appendChild(newDiv);
        } else {
            keyDiv.style.backgroundColor = colorMap[event.key];
        }
    }
});
