const sentence = document.querySelector('#sentence');
const philo = document.querySelector('#philo');
const author = document.querySelector('#author');
const btn = document.querySelector('#btn');

const time = document.querySelector('#time');
const good = document.querySelector('#good');

/* afficher la date */
let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}
let date = document.querySelector('#date');
let dateReal = day + "/" + month + "/" + year;
date.innerHTML = `<span id="dateSpan">${dateReal}</span>`;


/* Afficher l'heure en temps réel */
const formatTime = { hour: "2-digit", minute: "2-digit" };

function afficherHeure() {
  const date = new Date();
  let heure = date.toLocaleTimeString("fr-FR", formatTime);
  let element = document.getElementById("timeSpan");
  element.innerHTML = heure;
}

afficherHeure();
// Appeler la fonction toutes les secondes
setInterval(afficherHeure, 1000);


/* afficher le good en fonction de l'heure */
function goodDisplay() {
  // Récupérer l'heure locale sous forme de nombre entier
  let heure = afficherHeure()
  
  let message = document.getElementById("goodSpan");
  
  if (heure > 5 && heure < 12) {
    message.innerHTML = 'Good Morning';
  } else if (heure >= 12 && heure < 17) {
    message.innerHTML = 'Good Afternoon';
  } else if (heure >= 17 && heure < 23) {
    message.innerHTML = 'Good Evening';
  } else {
    message.innerHTML = 'Good Night';
  }
};
goodDisplay();
setInterval(goodDisplay, 1000);

/* afficher un phrase philo random en cliquant sur le btn */
function newSentence(){
    fetch('https://quotable.io/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
       philo.innerText = data.content;author.innerHTML="-"+data.author;
    })
    .catch(error => {
        console.error('Erreur :', error);
    });
}

btn.addEventListener('click', function(){
    console.log('clicked'); 
    newSentence();
});
