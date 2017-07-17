/**
 * Created by maxime on 30/06/17.
 */
//Tableau de résultat
var array = [];

//Tableau d'emails
var arrayMail = [];

//Zone de résultat
var res = document.getElementById("result");

//event
document.getElementById("listE").addEventListener("submit", function (evt) {
    evt.preventDefault();

    //Récupération des valeurs saisies par l'utilisateur
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var domaine = document.getElementById("domaine").value;

    //Créations des emails
    arrayMail.push(firstname+"."+lastname+"@"+domaine);
    arrayMail.push(lastname+"."+firstname+"@"+domaine);
    arrayMail.push(firstname+"-"+lastname+"@"+domaine);
    arrayMail.push(lastname+"-"+firstname+"@"+domaine);
    arrayMail.push(firstname.substr(0,1)+lastname+"@"+domaine);

    //Création du tableau de résultats
    var tab = document.createElement('table');
    tab.className = "table table-striped";
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var th = document.createElement('th');

    for (var i=0; i<5; i++) {

        var tr = document.createElement('tr');

        array.push(firstname);
        array.push(lastname);
        array.push(arrayMail[i]);

        console.log(array);

        array.forEach(function (e) {

            var td = document.createElement('td');
            td.appendChild(document.createTextNode(e));

            tr.appendChild(td);
            tbody.appendChild(tr);
        });

        array=[];

    }

    tab.appendChild(thead);
    tab.appendChild(tbody);

    res.appendChild(tab);

});


