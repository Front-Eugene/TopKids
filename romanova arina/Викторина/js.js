let quiz = {
// PROPERTIES
// QUESTIONS & ANSWERS
// q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
data: [
{
q: "А вопросы как у Вас писать??",
o: [ 
"да",
"нет ",
"наверное",
"я ботик",
],
a: 3
},
{
q: "А сколько вопросов писать?",
o: [ 
"пять",
"5 ",
"пят???",
"12",
],
a: 3
},
{
q: "Какой ты хрюндель?",
o: [
"Джордж",
"Папа Свин",
"Мама Свин",
"Свинной грипп",
],
a: 0
},
{
q: "В какой стране впервые проходил Кубок мира ФИФА?",
o: [
"Уругвай",
"Франция",
"Испания",
"Англия",
],
a: 0
},
{
q: "Как называется гол, который футболист забил в свои ворота?",
o: [
"Штрафной",
"«Мертвый мяч»",
"Автогол",
"Ложный маневр",
],
a: 2
},
{
q: "Какое количество игроков одновременно находится на игровом поле с двух сторон?",
o: [
"30 игроков",
"24 игрока",
"11 игроков",
"22 игрока",
],
a: 3
}
  ],
hWrap: null, 
hQn: null, 
hAns: null, 

now: 0,
score: 0,

init: () => {

quiz.hWrap = document.getElementById("quizWrap");

quiz.hQn = document.createElement("div");
quiz.hQn.id = "quizQn";
quiz.hWrap.appendChild(quiz.hQn);
quiz.hAns = document.createElement("div");
quiz.hAns.id = "quizAns";
quiz.hWrap.appendChild(quiz.hAns);
quiz.draw();
},
draw: () => {
quiz.hQn.innerHTML = quiz.data[quiz.now].q;
quiz.hAns.innerHTML = "";
for (let i in quiz.data[quiz.now].o) {
let radio = document.createElement("input");
radio.type = "radio";
radio.name = "quiz";
radio.id = "quizo" + i;
quiz.hAns.appendChild(radio);
let label = document.createElement("label");
label.innerHTML = quiz.data[quiz.now].o[i];
label.setAttribute("for", "quizo" + i);
label.dataset.idx = i;
label.addEventListener("click", () => {
quiz.select(label);
});
quiz.hAns.appendChild(label);
}
},
select: (option) => {
let all = quiz.hAns.getElementsByTagName("label");
for (let label of all) {
label.removeEventListener("click", quiz.select);
}
let correct = option.dataset.idx == quiz.data[quiz.now].a;
if (correct) {
quiz.score++;
option.classList.add("correct");
} else {
option.classList.add("wrong");
}
quiz.now++;
setTimeout(() => {
if (quiz.now < quiz.data.length) { quiz.draw(); }
else {
quiz.hQn.innerHTML = `Вы ответили на ${quiz.score} из ${quiz.data.length} правильно.`;
quiz.hAns.innerHTML = "";
}
}, 1000);
},
reset : () => {
quiz.now = 0;
quiz.score = 0;
quiz.draw();
}
};
window.addEventListener("load", quiz.init);