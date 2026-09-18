let victoires = 0;
let defaites = 0;
let nuls = 0;

const boutonsJeu = document.querySelectorAll('.play-btn');
const affichageMessage = document.getElementById('round-message');
const affichageVictoires = document.getElementById('score-wins');
const affichageDefaites = document.getElementById('score-losses');
const affichageNuls = document.getElementById('score-draws');
const boutonReset = document.getElementById('btn-reset');

const choixPossibles = ['Pierre', 'Feuille', 'Ciseaux'];

function choixDuBot() {
    const indexAleatoire = Math.floor(Math.random() * choixPossibles.length);
    return choixPossibles[indexAleatoire];
}

function determinerResultat(choixJoueur, choixBot) {
    if (choixJoueur === choixBot){
        return 'Nul'; 
    }else if ((choixJoueur === 'Pierre' && choixBot === 'Ciseaux') ||
              (choixJoueur === 'Feuille' && choixBot === 'Pierre') ||
              (choixJoueur === 'Ciseaux' && choixBot === 'Feuille')) {
        return 'Victoire';
    } else {
        return 'Défaite';
    }
}

function mettreScoreAJour(resultat) {
    if (resultat === 'Victoire') {
        victoires++;
        affichageVictoires.textContent = victoires;
    } else if (resultat === 'Défaite') {
        defaites++;
        affichageDefaites.textContent = defaites;
    } else {
        nuls++;
        affichageNuls.textContent = nuls;
    }
}

function jouer(event){
    const choixBot = choixDuBot(); 
    const choixJoueur = event.currentTarget.getAttribute('data-choice');
    const resultat = determinerResultat(choixJoueur, choixBot);
    mettreScoreAJour(resultat);

    if (resultat === 'Victoire') {
        affichageMessage.textContent = `Vous avez gagné ! ${choixJoueur} bat ${choixBot}.`;
    }else if (resultat === 'Défaite') {
        affichageMessage.textContent = `Vous avez perdu ! ${choixBot} bat ${choixJoueur}.`;
    }else{
        affichageMessage.textContent = `Match nul !`;
    }
}

boutonsJeu.forEach(bouton => {
    bouton.addEventListener('click', jouer);
});

boutonReset.addEventListener('click', () => {
    victoires = 0;
    defaites = 0;
    nuls = 0;

    affichageVictoires.textContent = '0';
    affichageDefaites.textContent = '0';
    affichageNuls.textContent = '0';

    affichageMessage.textContent = 'Prêt à jouer ?';
});



