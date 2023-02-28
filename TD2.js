const fs = require('fs'); 
let user = fs.readFileSync('users.json'); //importer le fichier "users.json"
const tab = JSON.parse(user);  //recupérer le tableau du fichier importé





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
Liste_Pays_Utilisateurs();

//Pour afficher il suffit d'appler l'une des deux fonctions







