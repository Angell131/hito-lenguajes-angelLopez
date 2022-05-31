var alumnos = [{
    "numero": 1000,
    "nacimiento": "30-04-2002",
    "cliente": {
        "nif": "516667788A",
        "nombre": "Victor Sánchez",
        "tlf": "61777888"
    },
    "detalle": [{
        "alumno": "Victor",
        "fol": 8,
        "notfol": "Notable",
        "bd": 9,
        "notbd": "Sobresaliente",
        "lm": 8,
        "notlm": "Notable",
        "ed": 9,
        "noted": "Sobresaliente",
        "pogramacion": 10,
        "notpogramacion": "Sobresaliente",
        "si": 10,
        "notsi": "Sobresaliente",
        "media":"Sobresaliente"
    }]
},
{
    "numero": 1001,
    "nacimiento": "01-05-2020",
    "cliente": {
        "nif": "61777888Q",
        "nombre": "Mario Valverde",
        "tlf": "677888999"
    },
    "detalle": [{
        "alumno": "Valverde",
        "fol": 1,
        "notfol": "Muy deficiente",
        "bd": 3,
        "notbd": "Deficiente",
        "lm": 2,
        "notlm": "Muy deficiente",
        "ed": 4,
        "noted": "Deficiente",
        "pogramacion": 5,
        "notpogramacion": "Suficiente",
        "si": 6,
        "notsi": "Bien",
        "media":"Insuficiente"
    }]
},
{
    "numero": 1002,
    "nacimiento": "01-05-1000",
    "cliente": {
        "nif": "945678249Ñ",
        "nombre": "Javier Villalobos",
        "tlf": "185264927"
    },
    "detalle": [{
        "alumno": "Villalobos",
        "fol": 10,
        "notfol": "Sobresaliente",
        "bd": 7,
        "notbd": "Notable",
        "lm": 7,
        "notlm": "Notable",
        "ed": 6,
        "noted": "Bien",
        "pogramacion": 5,
        "notpogramacion": "Suficiente",
        "si": 6,
        "notsi": "Bien",
        "media":"Notable"
    }]
},
{
    "numero": 1003,
    "nacimiento": "01-05-2000",
    "cliente": {
        "nif": "777664913J",
        "nombre": "Javier Martín",
        "tlf": "1672492485"
    },
    "detalle": [{
        "alumno": "Cervecitas",
        "fol": 6,
        "notfol": "Bien",
        "bd": 8,
        "notbd": "Notable",
        "lm": 7,
        "notlm": "Notable",
        "ed": 9,
        "noted": "Sobresaliente",
        "pogramacion": 9,
        "notpogramacion": "Sobresaliente",
        "si": 8,
        "notsi": "Notable",
        "media":"Sobresaliente"
    }]
}
]

onload=llenarLista;

function llenarLista(){
 // Recupero el elemento <select>
var lista = document.getElementById("lista");

for (var i=0; i<alumnos.length; i++) {
    var c = alumnos[i].numero;
    var valor = document.createTextNode(c);
    var nodo = document.createElement("option");
    nodo.appendChild(valor);
    nodo.value=c;
    lista.appendChild(nodo);
}

leerFactura();
}

function leerFactura() {
var leyenda= document.getElementById("leyenda");

var fac = document.getElementById("lista");
var i = fac.options.selectedIndex;

leyenda.innerHTML = "Numero " +alumnos[i].numero;

var datos = document.getElementById("datosFactura");
datos.innerHTML = "<p>Nº Alumno: "+alumnos[i].numero +
     "&nbsp;&nbsp;&nbsp;&nbsp; Nacimiento: "+alumnos[i].nacimiento+"</p>";
datos.innerHTML = datos.innerHTML + 
    "<p>Alumno: "+
    "&nbsp;&nbsp;&nbsp; "+alumnos[i].cliente.nombre +
    "&nbsp;&nbsp;&nbsp; Tlf: "+alumnos[i].cliente.tlf+"</p>";

var det = document.getElementById("detalle");	

det.innerHTML="";
for (var d=0; d<alumnos[i].detalle.length; d++) {
    det.innerHTML = det.innerHTML + "<tr>" +
        "<td class='arti'>"+alumnos[i].detalle[d].alumno+"</td>" +
        "<td class='dere'>"+alumnos[i].detalle[d].fol+" - "+alumnos[i].detalle[d].notfol+"</td>" +
        "<td class='dere'>"+alumnos[i].detalle[d].bd+" - "+alumnos[i].detalle[d].notbd+"</td>" +
        "<td class='dere'>"+alumnos[i].detalle[d].lm+" - "+alumnos[i].detalle[d].notlm+"</td>" +
        "<td class='dere'>"+alumnos[i].detalle[d].ed+" - "+alumnos[i].detalle[d].noted+"</td>" +
        "<td class='dere'>"+alumnos[i].detalle[d].pogramacion+" - "+alumnos[i].detalle[d].notpogramacion+"</td>" +
        "<td class='dere'>"+alumnos[i].detalle[d].si+" - "+alumnos[i].detalle[d].notsi+"</td>" +
        "<td class='dere'>"+(alumnos[i].detalle[d].fol+alumnos[i].detalle[d].bd+alumnos[i].detalle[d].lm+alumnos[i].detalle[d].ed+alumnos[i].detalle[d].pogramacion+alumnos[i].detalle[d].si)/6+"-"+alumnos[i].detalle[d].media+"</td>" +
        "</tr>";
}


fetch("agenda.json", options)
      .then(response => response.text())
      .then(data => llenarTabla(data));

}