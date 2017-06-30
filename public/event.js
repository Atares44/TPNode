/**
 * Created by maxime on 30/06/17.
 */
var array = [];

var firstname = document.getElementById("firstname").textContent;
var lastname = document.getElementById("lastname").textContent;
var domaine = document.getElementById("domaine").textContent;

array.push(firstname);
array.push(lastname);
array.push(domaine);

var res = document.getElementById("result");

//event
document.getElementById("listE").addEventListener("submit", function (evt) {
    evt.preventDefault();

    var tab = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var th = document.createElement('th');
    var tr = document.createElement('tr');

    array.forEach (function(e){


        var td = document.createElement('td');
        td.appendChild(document.createTextNode(e));

        tr.appendChild(td);
        tbody.appendChild(tr);
    })

    tab.appendChild(thead);
    tab.appendChild(tbody);

    res.appendChild(tab);

});


