const phi = 1.62;

let width = Math.round(+prompt("Base rectangle width :"));
let height = Math.round(width / phi);

let parentDiv = document.getElementById("main-box");

// Iterative Approach
function goldenRectangle1() {
    for (let i = 2; width >= 10; i++) {
        let childDiv = document.createElement("div");
        parentDiv.appendChild(childDiv);

        const [r, g, b] = randRGB();

        childDiv.style.width = width + "px";
        childDiv.style.height = height + "px";
        childDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        if (i % 2) {
            height = Math.round(width / phi);
        } else {
            width = Math.round(height / phi);
        }
        parentDiv = childDiv;
    }
}

// Recursive approach
let count = 2;

function goldenRectangle2() {
    if (width < 10) return;

    let childDiv = document.createElement("div");
    parentDiv.appendChild(childDiv);

    const [r, g, b] = randRGB();

    childDiv.style.width = width + "px";
    childDiv.style.height = height + "px";
    childDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    if (count % 2)
        height = Math.round(width / phi);
    else
        width = Math.round(height / phi);

    parentDiv = childDiv;
    count++;
    return goldenRectangle2();
}

function randRGB() {
    const arr = new Array(3).fill();
    return arr.map(ele =>
        Math.floor(Math.random() * 255));
}

function blink() {
    let opaque = 0.8;

    setInterval(() => {
        document.querySelector("div").style.opacity = opaque;
        opaque = opaque == 1 ? 0.8 : 1;
    }, 800);
}

// goldenRectangle1();
goldenRectangle2();
blink();