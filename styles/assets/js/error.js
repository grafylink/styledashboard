// machine à ecrire pages notfound
const title = document.querySelector('h1');
const text404 = "Chemin sans issue, Go home !";
const text501 = "Serveur en berne :( on revient très vite !";
const texttravaux = "C'est le chantier ici, reviens plus tard. ";
const textnoenter = "Désolé accès réservé, connecté ?";

function typewriter(word, index){
  if(index < word.length){
    setTimeout(() => {
      title.innerHTML += `<span>${word[index]}</span>`;
      typewriter(word, index + 1)
    }, 200)
  }
}
setTimeout(()=>{
    typewriter(texttravaux, 0)
  }, 300);