let argent = 0;
let compte = 0;
let numero = 0;
let aNum = 0;

// const userAccounts = {};
// console.log(userAccounts)

function createAccount (){

    argent = prompt("Entrez l'argent que vous possédez sur ce compte")
    compte = prompt("Quel nom souhaitez vous donner à ce compte ?")
    numero = numero + 1
    // argentaccount(numero) = argent
    // console.log(argentaccount)

    
    const div = document.getElementById('accounts')
    const account = document.createElement('div') // Push la div dans accounts et tout le reste dans la div account
    account.id = 'account' + numero;
    div.appendChild(account)

    const accountget = document.getElementById('account' + numero)
    console.log(accountget)

    

    const showMoney2 = document.createElement('p')
    showMoney2.textContent = (argent + ' euros')
    showMoney2.id = 'laSomme' + numero
    const name = document.createElement('h3')
    name.textContent = (compte)
    name.id = 'accountName'
    // const h1 = document.createTextNode(compte)

    const buttonAdd = document.createElement('button')
    buttonAdd.id = 'addMoney';
    buttonAdd.className = numero;
    buttonAdd.textContent = ("Ajouter")
    buttonAdd.addEventListener('click', function() {
        var clickedButtonAdd = document.getElementById('addMoney')
        // var accountNumero = clickedButtonAdd.className

        var accountNumero = event.target.className
        aNum = parseInt(accountNumero)
        console.log(aNum + 'AccountNumero')
        
        console.log(accountNumero)
        console.log("AGGGGG")

        ajouterArgent();
    });

    const buttonRetirer = document.createElement('button')
    buttonRetirer.id = 'retirerMoney';
    buttonRetirer.className = numero;
    buttonRetirer.textContent = ("Retirer de l'argent")
    buttonRetirer.addEventListener('click', function() {
        var accountNumero = event.target.className
        aNum = parseInt(accountNumero)
        retirerArgent();
    });

    accountget.appendChild(name)
    accountget.appendChild(showMoney2)

    const boutonsbloc = document.createElement('div')
    boutonsbloc.id = 'buttonsthediv' + numero
    accountget.appendChild(boutonsbloc)
    const boutonsBlocDiv = document.getElementById('buttonsthediv' + numero)

    boutonsBlocDiv.appendChild(buttonAdd)
    boutonsBlocDiv.appendChild(buttonRetirer)
}

const boutonadd = document.getElementById('addMoney')
const boutonsupp = document.getElementById('retirerMoney')

// En fonction du compte faire le transfert vers le bon.
function ajouterArgent (){
    console.log(argent)
    console.log('fonction d ajout d argent en cours')
    somme = prompt('entrez la somme à ajouter')
    if (!isNaN(somme)) {
        argent = parseInt(argent) + parseInt(somme)
        document.getElementById('laSomme' + aNum).innerHTML = argent + ' euros';
    } else {
        alert('Veuillez entrez un nombre valide')
    }
    
    console.log(argent)
}
function retirerArgent (){
    soustraction = prompt('entrez la somme à soustraire')
    if (!isNaN(soustraction)) {
        argent = parseInt(argent) - parseInt(soustraction)
        document.getElementById('laSomme' + aNum).innerHTML = argent + ' euros';
    } else {
        alert('Veuillez entrez un nombre valide')
    }
}



// ajout du fonctionnement du ajout et retrait.
// Transfert d'argent entre compte 
// Et creation de compte mieux goupillée
// Meilleur choix des noms de classes, id, fonctions. plus logiques/cohérent.
// Faire en sorte que boutons soient spécifiques au compte auquel ils sont affiliés.
//Stocker toutes les données avec local storage
// Plutot pour les differentes sommes associés a differents comptes utiliser des objets et tableaux. Surement beaucoup mieux.

// quand soustraction d'argent avec champ vide et confirmation la valeur passe a NAN. bien set les conditions pour eviter ca.