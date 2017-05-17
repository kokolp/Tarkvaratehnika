

document.getElementById("lisa-rida").onclick = function () {
    var liik = document.getElementById("liik").value;
    var summa = parseInt(document.getElementById("summa").value, 10);
    var summa2 = parseInt(document.getElementById("summa2").value, 10);
    var kulutulu = document.getElementById("kulutulu").value;
    
    var ridaElement = document.createElement('tr');
    var rida = '<td>' + liik + '</td>\n';
    rida += '<td>' + summa + '</td>\n';
    rida += '<td>' + summa2 + '</td>\n';
    rida += '<td>' + kulutulu + '</td>\n';
    
    ridaElement.innerHTML = rida;
 
    document.getElementById("table-body").appendChild(ridaElement);   

	var table = document.getElementById("table2");
	var prognoositudtuludkokku = parseInt(table.rows[1].cells[1].innerHTML,10);
    var prognoositudkuludkokku = parseInt(table.rows[1].cells[2].innerHTML,10);
    var prognoositudjääk = parseInt(table.rows[1].cells[3].innerHTML,10);
    var tegeliktuludkokku = parseInt(table.rows[2].cells[1].innerHTML,10);
    var tegelikkuludkokku = parseInt(table.rows[2].cells[2].innerHTML,10);
    var tegelikjääk = parseInt(table.rows[2].cells[3].innerHTML,10);
    
    if (kulutulu === "Tulu") {
        prognoositudtuludkokku += summa;
        tegeliktuludkokku += summa2;
        
        table.rows[1].cells[1].innerHTML = prognoositudtuludkokku;
        table.rows[2].cells[1].innerHTML = tegeliktuludkokku; 
    } else if (kulutulu === "Kulu") {
        prognoositudkuludkokku += summa;
        tegelikkuludkokku += summa2;
        
        table.rows[1].cells[2].innerHTML = prognoositudkuludkokku;
        table.rows[2].cells[2].innerHTML = tegelikkuludkokku;
    }
	// Jäägi arvutamine  
	table.rows[1].cells[3].innerHTML = prognoositudtuludkokku - prognoositudkuludkokku;
    table.rows[2].cells[3].innerHTML = tegeliktuludkokku - tegelikkuludkokku;   
    
};
