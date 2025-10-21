import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['Tu madre', 'Mi primo', 'El presidente', 'Dios'];
  let action = [' se ha comido', ' ha destrozado por completo', ' ha vendido', ' ha esclavizado'];
  let what = [' a mi perro', ' mi coche', ' a la humanidad', ' el continuo espacio-tiempo'];
  let when = [' justo antes de venir', ' justo ahora', ' cuando salía de casa', ' mientras dormía'];

  let elementExcuse = this.document.getElementById('excusa');

  let excuseContent = who[Math.floor(Math.random() * 4)] 
  + action[Math.floor(Math.random() * 4)] 
  + what[Math.floor(Math.random() * 4)]
  + when[Math.floor(Math.random() * 4)];

  elementExcuse.innerHTML = excuseContent;

};
