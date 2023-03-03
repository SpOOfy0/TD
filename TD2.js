const prompt = require("prompt-sync")();    //inclusion  de prompt
const fs = require("fs"); 
const color = require('chalk')
let utulisateur = fs.readFileSync("users.json"); //importer le fichier "users.json"





let  id, email, first, last, company1, created, country1, user;
const tab = JSON.parse(utulisateur);  //recupérer le tableau du fichier importé


//Parcourir le tableau en enregistrant les pays/sociétés dans une map tout en incrementant la valeurs pour les doublant.

function Liste_Pays_Utilisateurs()
{
    var Mapp = new Map;

    //Parcourir le tableau en enregistrant les pays/sociétés dans une map tout en incrementant la valeurs pour les doublant.
    for(var i=0;i<tab.length; i++)
    {

        if (Mapp.has(tab[i].country)) //cas ou la map contient déja ce pays comme clé
        {
            Mapp.set(tab[i].country, Mapp.get(tab[i].country) + 1);   //incrementer la valeurs de ce clé
        }

        else      
        {
            Mapp.set(tab[i].country,1);    // ajouter le nouveau pays comme clé en le donnant une valeurs de 1
        }

    }

    console.log(Mapp);
}



function Liste_Société_Utilisateurs()

{
    var Mapp = new Map;

    for(var i=0;i<tab.length; i++)
    {

        if (Mapp.has(tab[i].company))
        {
            Mapp.set(tab[i].company, Mapp.get(tab[i].company) + 1);
        }

        else
        {
            Mapp.set(tab[i].company,1);
        }

    }

    console.log(Mapp);
}

function GetFromUser(){

    console.log(color.green("Quel est l`id ? \n"));
    id = prompt(" ");

    console.log(color.green("Quel est le prenom ? \n"));
    email = prompt(" ");

    console.log(color.green("Quel est le prenom ? \n"));
    first = prompt(" ");

    console.log(color.green("Quel est le nom? \n"));
    last = prompt(" ");

    console.log(color.green("Quel est le nom de la société ? \n"));
    company1 = prompt(" ");

    console.log(color.green("Quand a elle été créee ? \n"));
    created = prompt(" ");
    
    console.log(color.green("Quel est en est le pays ? \n"));
    country1 = prompt(" ");
    
}

function AddData(){
    user = {
        id: id,
        email: email,
        first: first,
        last: last,
        company: company1,
        created_at: created,
        country: country1
    };

    tab.push(user);

    var newdata = JSON.stringify(tab);
    fs.writeFile('users.json', newdata, err => {
        // error checking
        if(err) throw err;
        
        console.log("Utilisateur ajouté");
    });
}

//Pour afficher il suffit d'appler l'une des deux fonctions (console)

function Afficher(){

    //on a utiliser le console.log puisque le \n ne marche pas avec le prompt
    console.log(color.red("   C'est quoi votre choix ? \n\
    1: Société   \n\
    2: Pays       \n\
    3: Ajouter un utulisateur   \n\
    4: Quitter :\n "));

    const choix = prompt(" ");  //récupérer la valeur taper par l'utilisateur

    console.log(`votre choix est :  ${choix}`);

    if(choix==1){
        Liste_Société_Utilisateurs(); //les societes
    }
    if(choix==2){
        Liste_Pays_Utilisateurs();  //les pays
    }
    if(choix==3){
        GetFromUser();
        AddData();
    }
    if(choix==4){
        console.log(color.blue("Good bye"));   //exit 
    }
}
Afficher();






