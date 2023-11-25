function checkboxArc(a, b) {
    if (document.getElementById(a).checked == true) {
        document.getElementById(b).checked = false
    } else {
        document.getElementById(b).checked = true
    }
    buttonAppears();
}

function buttonAppears() {
    document.getElementById('b1').style.display = "none";
    document.getElementById('b2').style.display = "none";
    document.getElementById('b3').style.display = "none";
    document.getElementById('b4').style.display = "none";
    document.getElementById('b6').style.display = "none";
    document.getElementById('b8').style.display = "none";
    document.getElementById('c89').style.display = "inline";
    document.getElementById('c88').style.display = "inline";
    document.getElementById('c87').style.display = "inline";
    document.getElementById('c86').style.display = "inline";
    document.getElementById('c85').style.display = "inline";
    document.getElementById('c84').style.display = "inline";
    document.getElementById('c34').style.display = "inline";
    document.getElementById('c14').style.display = "inline";
    document.getElementById('c24').style.display = "inline";
    if (document.getElementById('cdadequipos').value !== "" && (document.getElementById('todosvstodos').checked == true || document.getElementById('zonas').checked == true) && (document.getElementById('3sets').checked == true || document.getElementById('5sets').checked == true)) {
        document.getElementById('next1.1').style.display = "flex";
        document.getElementById('intro').style.display = "none";
        if (document.getElementById('todosvstodos').checked == true || document.getElementById('cdadequipos').value <= 5) {
            document.getElementById('contenedor').style.display = "flex";
            document.getElementById('contenedor').style.width = "90%";
            document.getElementById('b8').style.display = "flex";
            document.getElementById('b8').style.width = "100%";
            if (document.getElementById('cdadequipos').value <= 8) {
                document.getElementById('c89').style.display = "none";
                if (document.getElementById('cdadequipos').value <= 7) {
                    document.getElementById('c88').style.display = "none";
                    if (document.getElementById('cdadequipos').value <= 6) {
                        document.getElementById('c87').style.display = "none";
                        if (document.getElementById('cdadequipos').value <= 5) {
                            document.getElementById('c86').style.display = "none";
                            if (document.getElementById('cdadequipos').value <= 4) {
                                document.getElementById('c85').style.display = "none";
                                if (document.getElementById('cdadequipos').value <= 3) {
                                    document.getElementById('c84').style.display = "none";
                                }
                            }
                        }
                    }
                }
            }
        }
        if (document.getElementById('todosvstodos').checked == false) {
            if (document.getElementById('cdadequipos').value >= 6 && document.getElementById('cdadequipos').value <= 12) {
                document.getElementById('contenedor').style.width = "90%";
                document.getElementById('b1').style.display = "flex";
                document.getElementById('b1').style.width = "100%";
                document.getElementById('b3').style.display = "flex";
                document.getElementById('b3').style.width = "100%";
                if (document.getElementById('cdadequipos').value <= 7) {
                    document.getElementById('c34').style.display = "none";
                    if (document.getElementById('cdadequipos').value <= 6) {
                        document.getElementById('c14').style.display = "none";
                    }
                }
                if (document.getElementById('cdadequipos').value == 9 || document.getElementById('cdadequipos').value == 11) {
                    document.getElementById('b2').style.display = "flex";
                    document.getElementById('b2').style.display = "flex";
                    document.getElementById('b2').style.width = "100%";
                    document.getElementById('c14').style.display = "none";
                    document.getElementById('c24').style.display = "none";
                    document.getElementById('c34').style.display = "none";
                }
            }
        }
    }
}