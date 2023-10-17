let iQuestion;
const arQuestions = [
    [
        "¿Quién descubrió America?",
        "Americo Vespucio",
        "Cristobal Colon",
        "Magallananes",
        "Donald Trump",
        "Cristobal Colon"
    ],
    [
        "2 + 2 = ",
        "1",
        "2",
        "3",
        "4",
        "4"
    ],
    [
        "3 x 2 = ",
        "1",
        "2",
        "6",
        "4",
        "6"
    ]
];
window.onload = function () {
    let node;
    let nodes;
    node = document.querySelector(".pregunta h2");
    nodes = document.querySelectorAll(".opciones p");
    getQuestion(node, nodes);
    nodes.forEach(node => {
        node.onclick = clicAnswer;
    });
}
function getRandomNumberBetweenTwoNumbers(numMin, numMax) {
    let iRandomNumber;
    iRandomNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

    return iRandomNumber;
}
function getQuestion(node, nodes) {
    iQuestion = getRandomNumberBetweenTwoNumbers(0, arQuestions.length - 1);
    node.innerText = arQuestions[iQuestion][0];
    nodes[0].innerText = arQuestions[iQuestion][1];
    nodes[1].innerText = arQuestions[iQuestion][2];
    nodes[2].innerText = arQuestions[iQuestion][3];
    nodes[3].innerText = arQuestions[iQuestion][4];
}
function clicAnswer() {
    let nodes = document.querySelectorAll(".opciones");
    console.log(arQuestions[iQuestion][5]);
    console.log(this.innerText);
    if (this.innerText === arQuestions[iQuestion][5]) {
        this.classList.add("Correcto");
    } else {
        this.classList.add("incorrecto");
        nodes.forEach(node => {
            if (node.innerText === arQuestions[iQuestion][5]) {
                node.classList.add("Correcto");
            }
        });
    }
}