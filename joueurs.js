const nbrJoueur = prompt("introduire le nombre de joeurs  ");
const nomJoueurtab =[];
for(let i = 0; i < nbrJoueur; i++) {
    
    nomJoueurtab.push (prompt(`introduire le nom de joueurs numero ${i}`));
}

nomJoueurtab.sort;

const nbrSet = prompt("introduire le nombre de sets  ");

for(let i = 0; i < nbrJoueur; i++) {
    const score[];
    const scoreset=0;
    const totalscore=0
    for(let h = 0; i < nbrSet; h++) {
        
        scoreset= (prompt(`introduire le score de ${nomJoueurtab[i]} set ${h}`));
        score.push(scoreset);
        totalscore= totalscore+scoreset;
        console.log (`score est ${score}totalcore est ${totalscore}`);
        

}
dicoJoueurs.set(`${nomJoueurtab[i]}`, {
    score: score,
    totalscore: totalscore
});
}



