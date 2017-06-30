/**
 * Created by maxime on 30/06/17.
 */
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var domaine = document.getElementById("domaine").value;
var res = document.getElementById("result").value;


//event
document.getElementById("resBtn").addEventListener("click", function (evt) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(firstname+","+lastname+","+domaine+","+firstname+"."+lastname+"@"+domaine));
    res.appendChild(p);
    evt.preventDefault();
});


