function checkboxArc(a, b) {
    if (document.getElementById(a).checked == true) {
        document.getElementById(b).checked = false
    } else {
        document.getElementById(b).checked = true
    }
    buttonAppears();
}

function buttonAppears() {
    if (document.getElementById('cdadequipos').value!=="" && (document.getElementById('todosvstodos').checked==true || document.getElementById('zonas').checked==true) && (document.getElementById('3sets').checked==true || document.getElementById('5sets').checked==true)){
        document.getElementById('next1.1').style.display="flex";
    }
}