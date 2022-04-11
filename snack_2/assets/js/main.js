/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

// creare un array di stringhe

let texts = ['fabio', 'DOMENICO', 'Luca'];

texts.forEach((text) => {
  // text in pos 0 (text.charAt(0))
  //text.substring(1)  parti dalla seconda lettera
  text = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
  console.log(text);
})