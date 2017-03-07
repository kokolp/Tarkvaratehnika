document.getElementById("lisa-rida").onclick = function () {
    var liik = document.getElementById("liik").value;
    var summa = document.getElementById("summa").value;
    var summa2 = document.getElementById("summa2").value;
    var kulutulu = document.getElementById("kulutulu").value;
    
    var ridaElement = document.createElement('tr');
    var rida = '<td>' + liik + '</td>\n';
    rida += '<td>' + summa + '</td>\n';
    rida += '<td>' + summa2 + '</td>\n';
    rida += '<td>' + kulutulu + '</td>\n';
    
    ridaElement.innerHTML = rida;
 
    document.getElementById("table-body").appendChild(ridaElement);  
};